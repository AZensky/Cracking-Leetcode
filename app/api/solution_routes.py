from flask import Blueprint, jsonify, session, request
from app.models import SolutionVote, Solution, db
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms import CreateVoteForm

solution_routes = Blueprint('solutions', __name__)

# Post a vote for a solution
@solution_routes.route('/<int:solutionid>/votes', methods=['POST'])
@login_required
def post_vote(solutionid):
    form = CreateVoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        user = current_user

        solution = Solution.query.get(solutionid)

        if solution.user_id == user.id:
            return {'message': 'User can not vote for their own solution'}

        old_vote = SolutionVote.query.filter(SolutionVote.solution_id == solutionid, SolutionVote.user_id == user.id).first()

        if old_vote is not None:
            if old_vote.upvote == data['upvote'] and data['upvote'] == True:
                return {'message': 'You have already upvoted this solution'}

            elif old_vote.upvote == data['upvote'] and data['upvote'] == False:
                return {'message': 'You have already downvoted this solution'}

            elif data['upvote'] == True:
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

@solution_routes.route('/<int:solutionid>/votes/<int:voteid>', methods=['DELETE'])
@login_required
def delete_vote(solutionid, voteid):
    user = current_user

    solution_vote = SolutionVote.query.get(voteid)
    solution = Solution.query.get(solutionid)

    if solution_vote is None:
        return {'message': 'You have not voted for this solution'}

    if solution_vote.user_id != user.id:
        return {'message': 'This vote does not belong to you'}

    if solution_vote.upvote == True:
        solution.vote_count -= 1

    if solution_vote.upvote == False:
        solution.vote_count += 1

    db.session.delete(solution_vote)
    db.session.commit()

    return {'message': 'Successfully deleted'}
