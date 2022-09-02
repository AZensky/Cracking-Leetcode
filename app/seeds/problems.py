from app.models import db, Problem
from app.problems import contains_duplicate, squares_of_a_sorted_array, sort_colors, product_of_array_except_self, two_sum, majority_element, valid_anagram, group_anagrams, top_k_frequent_elements, valid_palindrome, merge_sorted_array, three_sum, container_with_most_water, best_time_to_buy_sell_stock, longest_substring_without_repeating_chars, minimum_size_subarray_sum, binary_search_prob, search_rotated_sorted_array, find_min_rotated_sorted_array, search_2d_matrix, valid_parentheses, backspace_string_compare, daily_temperatures, evaluate_reverse_polish_notation, reverse_linked_list, merge_two_sorted_lists, palindrome_linked_list, linked_list_cycle, remove_nth_node, add_two_numbers, fibonacci, power_of_three, permuations, subsets, letter_combinations, generate_parentheses, invert_binary_tree, max_depth_binary_tree, right_side_view, count_good_nodes, validate_bst, number_of_islands, max_area_of_island, clone_graph, rotting_oranges, word_search, maximum_subarray, coin_change, unique_paths, house_robber

def seed_problems():

    problems = [contains_duplicate, squares_of_a_sorted_array, sort_colors, product_of_array_except_self, two_sum, majority_element, valid_anagram, group_anagrams, top_k_frequent_elements, valid_palindrome, merge_sorted_array, three_sum, container_with_most_water, best_time_to_buy_sell_stock, longest_substring_without_repeating_chars, minimum_size_subarray_sum, binary_search_prob, search_rotated_sorted_array, find_min_rotated_sorted_array, search_2d_matrix, valid_parentheses, backspace_string_compare, daily_temperatures, evaluate_reverse_polish_notation, reverse_linked_list, merge_two_sorted_lists, palindrome_linked_list, linked_list_cycle, remove_nth_node, add_two_numbers, fibonacci, power_of_three, permuations, subsets, letter_combinations, generate_parentheses, invert_binary_tree, max_depth_binary_tree, right_side_view, count_good_nodes, validate_bst, number_of_islands, max_area_of_island, clone_graph, rotting_oranges, word_search, maximum_subarray, coin_change, unique_paths, house_robber]

    for problem in problems:
        curr = Problem(name=problem['name'], category=problem['category'], description=problem['description'], example=problem['example'], difficulty=problem['difficulty'], link=problem['link'])

        db.session.add(curr)

    db.session.commit()

def undo_problems():
    db.session.execute('TRUNCATE problems RESTART IDENTITY CASCADE;')
    db.session.commit()
