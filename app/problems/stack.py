valid_parentheses = {
    'name': 'Valid Parentheses',
    'category': 'Stack',
    'description': """Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    1. Open brackets must be closed by the same type of brackets.
    2. Open brackets must be closed in the correct order.
    3. Every close bracket has a corresponding open bracket of the same type.""",
    'example': '''Input: s = "()[]"
Output: true''',
    'difficulty': 'Easy',
    'link': 'https://leetcode.com/problems/valid-parentheses/'
}

backspace_string_compare = {
    'name': 'Backspace String Compare',
    'category': 'Stack',
    'description': """Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.""",
    'example': '''Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".''',
    'difficulty': 'Easy',
    'link': 'https://leetcode.com/problems/backspace-string-compare/'
}

daily_temperatures = {
    'name': 'Daily Temperatures',
    'category': 'Stack',
    'description': """Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.""",
    'example': '''Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/daily-temperatures/'
}

evaluate_reverse_polish_notation = {
    'name': 'Evaluate Reverse Polish Notation',
    'category': 'Stack',
    'description': """Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.""",
    'example': '''Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/evaluate-reverse-polish-notation/'
}
