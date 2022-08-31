from app.models import db, Problem
from app.problems import contains_duplicate, squares_of_a_sorted_array, sort_colors, product_of_array_except_self, two_sum, majority_element, valid_anagram, group_anagrams, top_k_frequent_elements

def seed_problems():
    problem_1 = Problem(name=contains_duplicate['name'], category=contains_duplicate['category'], description=contains_duplicate['description'], example=contains_duplicate['example'], difficulty=contains_duplicate['difficulty'])

    problem_2 = Problem(name=squares_of_a_sorted_array['name'], category=squares_of_a_sorted_array['category'], description=squares_of_a_sorted_array['description'], example=squares_of_a_sorted_array['example'], difficulty=squares_of_a_sorted_array['difficulty'])

    problem_3 = Problem(name=sort_colors['name'], category=sort_colors['category'], description=sort_colors['description'], example=sort_colors['example'], difficulty=sort_colors['difficulty'])

    problem_4 = Problem(name=two_sum['name'], category=two_sum['category'], description=two_sum['description'], example=two_sum['example'], difficulty=two_sum['difficulty'])

    problem_5 = Problem(name=product_of_array_except_self['name'], category=product_of_array_except_self['category'], description=product_of_array_except_self['description'], example=product_of_array_except_self['example'], difficulty=product_of_array_except_self['difficulty'])

    problem_6 = Problem(name=majority_element['name'], category=majority_element['category'], description=majority_element['description'], example=majority_element['example'], difficulty=majority_element['difficulty'])

    problem_7 = Problem(name=valid_anagram['name'], category=valid_anagram['category'], description=valid_anagram['description'], example=valid_anagram['example'], difficulty=valid_anagram['difficulty'])

    problem_8 = Problem(name=group_anagrams['name'], category=group_anagrams['category'], description=group_anagrams['description'], example=group_anagrams['example'], difficulty=group_anagrams['difficulty'])

    problem_9 = Problem(name=top_k_frequent_elements['name'], category=top_k_frequent_elements['category'], description=top_k_frequent_elements['description'], example=top_k_frequent_elements['example'], difficulty=top_k_frequent_elements['difficulty'])

    db.session.add(problem_1)
    db.session.add(problem_2)
    db.session.add(problem_3)
    db.session.add(problem_4)
    db.session.add(problem_5)
    db.session.add(problem_6)
    db.session.add(problem_7)
    db.session.add(problem_8)
    db.session.add(problem_9)

    db.session.commit()

def undo_problems():
    db.session.execute('TRUNCATE problems RESTART IDENTITY CASCADE;')
    db.session.commit()
