from app.models import db, Solution
from app.solutions import contains_duplicate_solution, squares_of_a_sorted_array_solution, sort_colors_solution, product_of_array_except_self_solution

def seed_solutions():
    solution_1 = Solution(title='JavaScript Solution', answer=contains_duplicate_solution, language='javascript', example_solution=True, user_id=1, problem_id=1)

    solution_2 = Solution(title='JavaScript Solution', answer=squares_of_a_sorted_array_solution, language='javascript', example_solution=True, user_id=1, problem_id=2)

    solution_3 = Solution(title='JavaScript Solution', answer=sort_colors_solution, language='javascript', example_solution=True, user_id=1, problem_id=3)

    solution_4 = Solution(title='JavaScript Solution', answer=product_of_array_except_self_solution, language='javascript', example_solution=True, user_id=1, problem_id=4)

    db.session.add(solution_1)
    db.session.add(solution_2)
    db.session.add(solution_3)
    db.session.add(solution_4)

    db.session.commit()

def undo_solutions():
    db.session.execute('TRUNCATE solutions RESTART IDENTITY CASCADE;')
    db.session.commit()
