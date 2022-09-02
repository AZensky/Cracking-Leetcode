from app.models import db, Solution
from app.solutions import contains_duplicate_solution, squares_of_a_sorted_array_solution, sort_colors_solution, product_of_array_except_self_solution, two_sum_solution, majority_element_solution, valid_anagram_solution, group_anagrams_solution, top_k_frequent_elements_solution, valid_palindrome_solution, merge_sorted_array_solution, three_sum_solution, conatiner_with_most_water_solution, best_time_to_buy_sell_stock_solution, longest_substring_without_repeating_chars_solution, minimum_size_subarray_sum_solution, binary_search_solution, search_rotated_sorted_array_solution, find_minimum_rotated_sorted_array_solution, search_2d_matrix_solution

def seed_solutions():
    solution_1 = Solution(title='JavaScript Solution', answer=contains_duplicate_solution, language='javascript', example_solution=True, user_id=1, problem_id=1)

    solution_2 = Solution(title='JavaScript Solution', answer=squares_of_a_sorted_array_solution, language='javascript', example_solution=True, user_id=1, problem_id=2)

    solution_3 = Solution(title='JavaScript Solution', answer=sort_colors_solution, language='javascript', example_solution=True, user_id=1, problem_id=3)

    solution_4 = Solution(title='JavaScript Solution', answer=product_of_array_except_self_solution, language='javascript', example_solution=True, user_id=1, problem_id=4)

    solution_5 = Solution(title='JavaScript Solution', answer=two_sum_solution, language='javascript', example_solution=True, user_id=1, problem_id=5)

    solution_6 = Solution(title='JavaScript Solution', answer=majority_element_solution, language='javascript', example_solution=True, user_id=1, problem_id=6)

    solution_7 = Solution(title='JavaScript Solution', answer=valid_anagram_solution, language='javascript', example_solution=True, user_id=1, problem_id=7)

    solution_8 = Solution(title='JavaScript Solution', answer=group_anagrams_solution, language='javascript', example_solution=True, user_id=1, problem_id=8)

    solution_9 = Solution(title='JavaScript Solution', answer=top_k_frequent_elements_solution, language='javascript', example_solution=True, user_id=1, problem_id=9)

    solution_10 = Solution(title='JavaScript Solution', answer=valid_palindrome_solution, language='javascript', example_solution=True, user_id=1, problem_id=10)

    solution_11 = Solution(title='JavaScript Solution', answer=merge_sorted_array_solution, language='javascript', example_solution=True, user_id=1, problem_id=11)

    solution_12 = Solution(title='JavaScript Solution', answer=three_sum_solution, language='javascript', example_solution=True, user_id=1, problem_id=12)

    solution_13 = Solution(title='JavaScript Solution', answer=conatiner_with_most_water_solution, language='javascript', example_solution=True, user_id=1, problem_id=13)

    solution_14 = Solution(title='JavaScript Solution', answer=best_time_to_buy_sell_stock_solution, language='javascript', example_solution=True, user_id=1, problem_id=14)

    solution_15 = Solution(title='JavaScript Solution', answer=longest_substring_without_repeating_chars_solution, language='javascript', example_solution=True, user_id=1, problem_id=15)

    solution_16 = Solution(title='JavaScript Solution', answer=minimum_size_subarray_sum_solution, language='javascript', example_solution=True, user_id=1, problem_id=16)

    solution_17 = Solution(title='JavaScript Solution', answer=binary_search_solution, language='javascript', example_solution=True, user_id=1, problem_id=17)

    solution_18 = Solution(title='JavaScript Solution', answer=search_rotated_sorted_array_solution, language='javascript', example_solution=True, user_id=1, problem_id=18)

    solution_19 = Solution(title='JavaScript Solution', answer=find_minimum_rotated_sorted_array_solution, language='javascript', example_solution=True, user_id=1, problem_id=19)

    solution_20 = Solution(title='JavaScript Solution', answer=search_2d_matrix_solution, language='javascript', example_solution=True, user_id=1, problem_id=20)

    db.session.add(solution_1)
    db.session.add(solution_2)
    db.session.add(solution_3)
    db.session.add(solution_4)
    db.session.add(solution_5)
    db.session.add(solution_6)
    db.session.add(solution_7)
    db.session.add(solution_8)
    db.session.add(solution_9)
    db.session.add(solution_10)
    db.session.add(solution_11)
    db.session.add(solution_12)
    db.session.add(solution_13)
    db.session.add(solution_14)
    db.session.add(solution_15)
    db.session.add(solution_16)
    db.session.add(solution_17)
    db.session.add(solution_18)
    db.session.add(solution_19)
    db.session.add(solution_20)

    db.session.commit()

def undo_solutions():
    db.session.execute('TRUNCATE solutions RESTART IDENTITY CASCADE;')
    db.session.commit()
