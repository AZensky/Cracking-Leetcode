maximum_subarray = {
    'name': 'Maximum Subarray',
    'category': 'Dynamic Programming',
    'description': """Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.""",
    'example': '''Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/maximum-subarray/'
}

coin_change = {
    'name': 'Coin Change',
    'category': 'Dynamic Programming',
    'description': """You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.""",
    'example': '''Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/coin-change/'
}

unique_paths = {
    'name': 'Unique Paths',
    'category': 'Dynamic Programming',
    'description': """There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.""",
    'example': '''Input: m = 3, n = 7
Output: 28''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/unique-paths/'
}

house_robber = {
    'name': 'House Robber',
    'category': 'Dynamic Programming',
    'description': """You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.""",
    'example': '''Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/house-robber/'
}
