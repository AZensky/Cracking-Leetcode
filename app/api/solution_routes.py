from flask import Blueprint, jsonify, session, request
from app.models import SolutionVote, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from app.forms import CreateVoteForm

solution_routes = Blueprint('solutions', __name__)

# Post a vote for a solution
@solution_routes.route('/<int:solutionid>/votes', methods=['POST'])
def post_vote(solutionid):
    form = CreateVoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print('ddaaatttTTTAAAA', form.data['upvote'])

    if form.validate_on_submit():
        data = form.data
        user = current_user

        old_vote = SolutionVote.query.filter(SolutionVote.solution_id == solutionid, SolutionVote.user_id == user.id).first()

        print('---------------------')
        print('olddd', old_vote)
        print('---------------------')

        if old_vote is not None:
            old_vote.upvote = data['upvote']

            db.session.commit()

            return old_vote.to_dict()

        else:
            new_vote = SolutionVote(upvote=data['upvote'], user_id=user.id, solution_id=solutionid)

            db.session.add(new_vote)
            db.session.commit()

            return new_vote.to_dict()

    else:
        print('HHHEEEREE')
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
