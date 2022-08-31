from flask import Blueprint, jsonify, session, request
from app.models import SolutionVote, Solution, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from app.forms import CreateVoteForm

solution_routes = Blueprint('solutions', __name__)

# Post a vote for a solution
@solution_routes.route('/<int:solutionid>/votes', methods=['POST'])
def post_vote(solutionid):
    form = CreateVoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        user = current_user

        old_vote = SolutionVote.query.filter(SolutionVote.solution_id == solutionid, SolutionVote.user_id == user.id).first()

        solution = Solution.query.get(solutionid)

        if old_vote is not None:
            if data['upvote'] == True:
                solution.vote_count += 2
            else:
                solution.vote_count -= 2

            old_vote.upvote = data['upvote']

            db.session.commit()

            return old_vote.to_dict()

        else:
            new_vote = SolutionVote(upvote=data['upvote'], user_id=user.id, solution_id=solutionid)
            if data['upvote'] == True:
                solution.vote_count += 1
            else:
                solution.vote_count -= 1

            db.session.add(new_vote)
            db.session.commit()

            return new_vote.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
