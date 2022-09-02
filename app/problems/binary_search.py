binary_search_prob = {
    'name': 'Binary Search',
    'category': 'Binary Search',
    'description': """Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.""",
    'example': '''Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4''',
    'difficulty': 'Easy',
    'link': 'https://leetcode.com/problems/binary-search/'
}

search_rotated_sorted_array = {
    'name': 'Search in Rotated Sorted Array',
    'category': 'Binary Search',
    'description': """There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.""",
    'example': '''Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/search-in-rotated-sorted-array/'
}

find_min_rotated_sorted_array = {
    'name': 'Find Minimum in Rotated Sorted Array',
    'category': 'Binary Search',
    'description': """Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.""",
    'example': '''Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/'
}

search_2d_matrix = {
    'name': 'Search a 2D Matrix',
    'category': 'Binary Search',
    'description': """Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.""",
    'example': '''Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/search-a-2d-matrix/'
}
