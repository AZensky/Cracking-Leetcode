from app.models import db, Problem
from app.problems import contains_duplicate, squares_of_a_sorted_array, sort_colors, product_of_array_except_self, two_sum, majority_element, valid_anagram, group_anagrams, top_k_frequent_elements, valid_palindrome, merge_sorted_array, three_sum, container_with_most_water, best_time_to_buy_sell_stock, longest_substring_without_repeating_chars, minimum_size_subarray_sum, binary_search, search_rotated_sorted_array, find_min_rotated_sorted_array, search_2d_matrix

def seed_problems():

    problems = [contains_duplicate, squares_of_a_sorted_array, sort_colors, product_of_array_except_self, two_sum, majority_element, valid_anagram, group_anagrams, top_k_frequent_elements, valid_palindrome, merge_sorted_array, three_sum, container_with_most_water, best_time_to_buy_sell_stock, longest_substring_without_repeating_chars, minimum_size_subarray_sum, binary_search, search_rotated_sorted_array, find_min_rotated_sorted_array, search_2d_matrix]

    for problem in problems:
        curr = Problem(name=problem['name'], category=problem['category'], description=problem['description'], example=problem['example'], difficulty=problem['difficulty'], link=problem['link'])

        db.session.add(curr)

    db.session.commit()

    # problem_1 = Problem(name=contains_duplicate['name'], category=contains_duplicate['category'], description=contains_duplicate['description'], example=contains_duplicate['example'], difficulty=contains_duplicate['difficulty'], link=contains_duplicate['link'])

    # problem_2 = Problem(name=squares_of_a_sorted_array['name'], category=squares_of_a_sorted_array['category'], description=squares_of_a_sorted_array['description'], example=squares_of_a_sorted_array['example'], difficulty=squares_of_a_sorted_array['difficulty'], link=squares_of_a_sorted_array['link'])

    # problem_3 = Problem(name=sort_colors['name'], category=sort_colors['category'], description=sort_colors['description'], example=sort_colors['example'], difficulty=sort_colors['difficulty'], link=sort_colors['link'])

    # problem_4 = Problem(name=product_of_array_except_self['name'], category=product_of_array_except_self['category'], description=product_of_array_except_self['description'], example=product_of_array_except_self['example'], difficulty=product_of_array_except_self['difficulty'], link=product_of_array_except_self['link'])

    # problem_5 = Problem(name=two_sum['name'], category=two_sum['category'], description=two_sum['description'], example=two_sum['example'], difficulty=two_sum['difficulty'], link=two_sum['link'])

    # problem_6 = Problem(name=majority_element['name'], category=majority_element['category'], description=majority_element['description'], example=majority_element['example'], difficulty=majority_element['difficulty'], link=majority_element['link'])

    # problem_7 = Problem(name=valid_anagram['name'], category=valid_anagram['category'], description=valid_anagram['description'], example=valid_anagram['example'], difficulty=valid_anagram['difficulty'], link=valid_anagram['link'])

    # problem_8 = Problem(name=group_anagrams['name'], category=group_anagrams['category'], description=group_anagrams['description'], example=group_anagrams['example'], difficulty=group_anagrams['difficulty'], link=group_anagrams['link'])

    # problem_9 = Problem(name=top_k_frequent_elements['name'], category=top_k_frequent_elements['category'], description=top_k_frequent_elements['description'], example=top_k_frequent_elements['example'], difficulty=top_k_frequent_elements['difficulty'], link=top_k_frequent_elements['link'])

    # problem_10 = Problem(name=valid_palindrome['name'], category=valid_palindrome['category'], description=valid_palindrome['description'], example=valid_palindrome['example'], difficulty=valid_palindrome['difficulty'], link=valid_palindrome['link'])

    # problem_11 = Problem(name=merge_sorted_array['name'], category=merge_sorted_array['category'], description=merge_sorted_array['description'], example=merge_sorted_array['example'], difficulty=merge_sorted_array['difficulty'], link=merge_sorted_array['link'])

    # problem_12 = Problem(name=three_sum['name'], category=three_sum['category'], description=three_sum['description'], example=three_sum['example'], difficulty=three_sum['difficulty'], link=three_sum['link'])

    # problem_13 = Problem(name=container_with_most_water['name'], category=container_with_most_water['category'], description=container_with_most_water['description'], example=container_with_most_water['example'], difficulty=container_with_most_water['difficulty'], link=container_with_most_water['link'])

    # problem_14 = Problem(name=best_time_to_buy_sell_stock['name'], category=best_time_to_buy_sell_stock['category'], description=best_time_to_buy_sell_stock['description'], example=best_time_to_buy_sell_stock['example'], difficulty=best_time_to_buy_sell_stock['difficulty'], link=best_time_to_buy_sell_stock['link'])

    # problem_15 = Problem(name=longest_substring_without_repeating_chars['name'], category=longest_substring_without_repeating_chars['category'], description=longest_substring_without_repeating_chars['description'], example=longest_substring_without_repeating_chars['example'], difficulty=longest_substring_without_repeating_chars['difficulty'], link=longest_substring_without_repeating_chars['link'])

    # problem_16 = Problem(name=minimum_size_subarray_sum['name'], category=minimum_size_subarray_sum['category'], description=minimum_size_subarray_sum['description'], example=minimum_size_subarray_sum['example'], difficulty=minimum_size_subarray_sum['difficulty'], link=minimum_size_subarray_sum['link'])

    # problem_17 = Problem(name=binary_search['name'], category=binary_search['category'], description=binary_search['description'], example=binary_search['example'], difficulty=binary_search['difficulty'], link=binary_search['link'])

    # problem_18 = Problem(name=search_rotated_sorted_array['name'], category=search_rotated_sorted_array['category'], description=search_rotated_sorted_array['description'], example=search_rotated_sorted_array['example'], difficulty=search_rotated_sorted_array['difficulty'], link=search_rotated_sorted_array['link'])

    # problem_19 = Problem(name=find_min_rotated_sorted_array['name'], category=find_min_rotated_sorted_array['category'], description=find_min_rotated_sorted_array['description'], example=find_min_rotated_sorted_array['example'], difficulty=find_min_rotated_sorted_array['difficulty'], link=find_min_rotated_sorted_array['link'])

    # problem_20 = Problem(name=search_2d_matrix['name'], category=search_2d_matrix['category'], description=search_2d_matrix['description'], example=search_2d_matrix['example'], difficulty=search_2d_matrix['difficulty'], link=search_2d_matrix['link'])

    # db.session.add(problem_1)
    # db.session.add(problem_2)
    # db.session.add(problem_3)
    # db.session.add(problem_4)
    # db.session.add(problem_5)
    # db.session.add(problem_6)
    # db.session.add(problem_7)
    # db.session.add(problem_8)
    # db.session.add(problem_9)
    # db.session.add(problem_10)
    # db.session.add(problem_11)
    # db.session.add(problem_12)
    # db.session.add(problem_13)
    # db.session.add(problem_14)
    # db.session.add(problem_15)
    # db.session.add(problem_16)
    # db.session.add(problem_17)
    # db.session.add(problem_18)
    # db.session.add(problem_19)
    # db.session.add(problem_20)

    # db.session.commit()

def undo_problems():
    db.session.execute('TRUNCATE problems RESTART IDENTITY CASCADE;')
    db.session.commit()
