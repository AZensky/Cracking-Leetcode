fibonacci_solution = """const fib = function(n) {
    if (n === 0) return null
    if (n === 1 || n === 2) return 1;

    return fib(n - 1) + fib(n - 2)
};"""

power_of_three_solution = """const isPowerOfThree = function(n) {
    if (n === 1) return true;
    if (n < 1) return false;

    return isPowerOfThree(n / 3)
};"""

permutations_solution = """const permute = function(nums) {
    let res = [];

    let set = new Set();

    function generatePerms() {
        if (set.size === nums.length) {
            res.push([...set]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) continue;

            set.add(nums[i]);

            generatePerms();

            set.delete(nums[i]);
        }
    }

    generatePerms();

    return res
};"""

subsets_solution = """const subsets = function(nums) {
    let res = [];

    let currSubset = [];

    function generateSubsets(idx) {
        if (idx === nums.length) {
            res.push([...currSubset]);
            return;
        }

        currSubset.push(nums[idx]);
        generateSubsets(idx + 1);

        currSubset.pop();
        generateSubsets(idx + 1);
    }

    generateSubsets(0);

    return res;
};"""

letter_combinations_solution = """const letterCombinations = function(digits) {
    if (!digits) return []

    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let res = [];

    function generateCombinations(currStr, idx) {
        if (currStr.length === digits.length) {
            res.push(currStr);
            return;
        }

        let currDigit = digits[idx];

        for (let char of map[currDigit]) {
            generateCombinations(currStr + char, idx + 1);
        }
    }

    generateCombinations('', 0);

    return res;
};"""

generate_parentheses_solution = """const generateParenthesis = function(n) {
    let res = [];

    function generate(openCount, closeCount, currStr) {
        if (currStr.length === n * 2) {
            res.push(currStr);
            return;
        }

        if (openCount < n) {
            generate(openCount + 1, closeCount, currStr + '(');
        }

        if (closeCount < openCount) {
            generate(openCount, closeCount + 1, currStr + ')');
        }
    }

    generate(0, 0, '')
    return res;

};"""
