from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, ProblemSolved, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# Route to handle user solving a problem
@user_routes.route('/<int:id>/problems-solved/<int:problemid>', methods=['POST'])
@login_required
def solve_problem(id, problemid):
    user = current_user

    user_instance = User.query.get(user.id)
    user_instance.num_solved += 1

    solved_problem = ProblemSolved(user_id=user.id, problem_id=problemid)

    db.session.add(solved_problem)
    db.session.commit()

    return solved_problem.to_dict()

# Route to handle removing solving a problem
@user_routes.route('/<int:id>/problems-solved/<int:problemid>', methods=['DELETE'])
@login_required
def delete_solved(id, problemid):
    user = current_user

    user_instance = User.query.get(user.id)
    user_instance.num_solved -= 1

    solved_problem = ProblemSolved.query.filter(ProblemSolved.user_id == user.id, ProblemSolved.problem_id == problemid).first()

    db.session.delete(solved_problem)
    db.session.commit()

    return {'message': 'Sucessfully deleted'}
