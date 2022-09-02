from app.models import db, Solution
from app.solutions import contains_duplicate_solution, squares_of_a_sorted_array_solution, sort_colors_solution, product_of_array_except_self_solution, two_sum_solution, majority_element_solution, valid_anagram_solution, group_anagrams_solution, top_k_frequent_elements_solution, valid_palindrome_solution, merge_sorted_array_solution, three_sum_solution, conatiner_with_most_water_solution, best_time_to_buy_sell_stock_solution, longest_substring_without_repeating_chars_solution, minimum_size_subarray_sum_solution, binary_search_solution, search_rotated_sorted_array_solution, find_minimum_rotated_sorted_array_solution, search_2d_matrix_solution, valid_parentheses_solution, backspace_string_compare_solution, daily_temperatures_solution, evalute_reverse_polish_notation_solution, reverse_linked_list_solution, merge_two_sorted_lists_solution, palindrome_linked_list_solution, linked_list_cycle_solution, remove_nth_node_solution, add_two_numbers_solution, fibonacci_solution, power_of_three_solution, permutations_solution, subsets_solution, letter_combinations_solution, generate_parentheses_solution, invert_binary_tree_solution, max_depth_binary_tree_solution, right_side_view_solution, count_good_nodes_solution, validate_bst_solution

def seed_solutions():

    solutions = [contains_duplicate_solution, squares_of_a_sorted_array_solution, sort_colors_solution, product_of_array_except_self_solution, two_sum_solution, majority_element_solution, valid_anagram_solution, group_anagrams_solution, top_k_frequent_elements_solution, valid_palindrome_solution, merge_sorted_array_solution, three_sum_solution, conatiner_with_most_water_solution, best_time_to_buy_sell_stock_solution, longest_substring_without_repeating_chars_solution, minimum_size_subarray_sum_solution, binary_search_solution, search_rotated_sorted_array_solution, find_minimum_rotated_sorted_array_solution, search_2d_matrix_solution, valid_parentheses_solution, backspace_string_compare_solution, daily_temperatures_solution, evalute_reverse_polish_notation_solution, reverse_linked_list_solution, merge_two_sorted_lists_solution, palindrome_linked_list_solution, linked_list_cycle_solution, remove_nth_node_solution, add_two_numbers_solution, fibonacci_solution, power_of_three_solution, permutations_solution, subsets_solution, letter_combinations_solution, generate_parentheses_solution, invert_binary_tree_solution, max_depth_binary_tree_solution, right_side_view_solution, count_good_nodes_solution, validate_bst_solution]

    for idx, solution in enumerate(solutions, start=1):
        curr = Solution(title='JavaScript Solution', answer=solution, language='javascript', example_solution=True, user_id=1, problem_id=idx)
        db.session.add(curr)

    db.session.commit()


def undo_solutions():
    db.session.execute('TRUNCATE solutions RESTART IDENTITY CASCADE;')
    db.session.commit()
