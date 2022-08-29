from app.models import db, Problem
from app.problems import contains_duplicate, squares_of_a_sorted_array, sort_colors, product_of_array_except_self

def seed_problems():
    problem_1 = Problem(name=contains_duplicate['name'], category=contains_duplicate['category'], description=contains_duplicate['description'], example=contains_duplicate['example'], difficulty=contains_duplicate['difficulty'])

    problem_2 = Problem(name=squares_of_a_sorted_array['name'], category=squares_of_a_sorted_array['category'], description=squares_of_a_sorted_array['description'], example=squares_of_a_sorted_array['example'], difficulty=squares_of_a_sorted_array['difficulty'])

    problem_3 = Problem(name=sort_colors['name'], category=sort_colors['category'], description=sort_colors['description'], example=sort_colors['example'], difficulty=sort_colors['difficulty'])

    problem_4 = Problem(name=product_of_array_except_self['name'], category=product_of_array_except_self['category'], description=product_of_array_except_self['description'], example=product_of_array_except_self['example'], difficulty=product_of_array_except_self['difficulty'])

    db.session.add(problem_1)
    db.session.add(problem_2)
    db.session.add(problem_3)
    db.session.add(problem_4)

    db.session.commit()

def undo_problems():
    db.session.execute('TRUNCATE problems RESTART IDENTITY CASCADE;')
    db.session.commit()
