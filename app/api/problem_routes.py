from flask import Blueprint, jsonify, session, request
from app.models import Problem, Solution, Rating, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from app.forms import CreateSolutionForm, EditSolutionForm, CreateRatingForm, EditRatingForm

problem_routes = Blueprint('problems', __name__)

# Get all problems
@problem_routes.route('')
def get_all_problems():
    problems = Problem.query.all()

    return {'Problems': [problem.to_dict() for problem in problems]}

# Get problem specified by id
@problem_routes.route('/<int:problemid>')
def get_problem_by_id(problemid):
    problem = Problem.query.get(problemid)

    if problem:
        return problem.to_dict()

    else:
        return {'message': 'Problem not found'}

# Post a solution for a problem
@problem_routes.route('/<int:problemid>/solutions', methods=['POST'])
def post_solution(problemid):
    form = CreateSolutionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        user = current_user

        solution = Solution(answer=data['solution'], title=data['title'], language=data['language'], user_id=user.id, problem_id=problemid)

        db.session.add(solution)
        db.session.commit()

        return solution.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit a solution for a problem
@problem_routes.route('/<int:id>/solutions/<int:solutionid>', methods=['PUT'])
def edit_solution(id, solutionid):
    form = EditSolutionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data

        solution = Solution.query.get(solutionid)
        solution.answer = data['solution']
        solution.title = data['title']
        solution.language = data['language']

        db.session.commit()

        return solution.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Delete a solution for a problem
@problem_routes.route('/<int:problemid>/solutions/<int:solutionid>', methods=['DELETE'])
def delete_solution(problemid, solutionid):

    solution = Solution.query.get(solutionid)

    if solution is None:
        return {'message': 'Could not find solution'}

    else:
        db.session.delete(solution)
        db.session.commit()
        return {'message': 'Successfully deleted'}

# Post a rating for a problem
@problem_routes.route('/<int:problemid>/ratings', methods=['POST'])
def post_rating(problemid):
    form = CreateRatingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        user = current_user

        user_rating = Rating.query.filter(Rating.user_id == user.id, Rating.problem_id == problemid).first()

        if user_rating is not None:
            return {'message': 'User has already rated this problem'}

        else:
            new_rating = Rating(rating=data['rating'], problem_id=problemid, user_id=user.id)

            db.session.add(new_rating)
            db.session.commit()

            return new_rating.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit a rating for a problem
@problem_routes.route('/<int:problemid>/ratings/<int:ratingid>', methods=['PUT'])
def edit_rating(problemid, ratingid):
    form = EditRatingForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data

        problem_rating = Rating.query.get(ratingid)

        problem_rating.rating = data['rating']

        db.session.commit()

        return problem_rating.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Delete a rating for a problem
@problem_routes.route('/<int:problemid>/ratings/<int:ratingid>', methods=['DELETE'])
def delete_rating(problemid, ratingid):
    rating = Rating.query.get(ratingid)

    if rating is None:
        return {'message': 'Could not find rating'}

    else:
        db.session.delete(rating)
        db.session.commit()
        return {'message': 'Successfully deleted'}
