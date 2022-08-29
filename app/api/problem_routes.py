from flask import Blueprint, jsonify, session, request
from app.models import User, Problem, Solution, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from app.forms import CreateSolutionForm
# from ..forms import PurchaseStockForm

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
        solution.answer = data['answer']

        db.session.add(solution)
        db.session.commit()

        return solution.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Delete a solution for a problem
@problem_routes.route('/<int:problemid>/solution/<int:solutionid>')
def delete_solution(problemid, solutionid):

    solution = Solution.query.get(solutionid)

    if solution is None:
        return {'message': 'Could not find solution'}

    else:
        db.session.delete(solution)
        db.session.commit()
        return {'message': 'Successfully deleted'}
