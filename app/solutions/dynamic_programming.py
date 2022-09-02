maximum_subarray_solution = """const maxSubArray = function(nums) {
    let res = nums[0];

    let currWindowSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currWindowSum = Math.max(currWindowSum + nums[i], nums[i]);
        res = Math.max(res, currWindowSum);
    }

    return res
};"""

coin_change_solution = """const coinChange = function(coins, amount) {
    let res = new Array(amount + 1).fill(Infinity);
    res[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue;
            res[i] = Math.min(res[i], 1 + res[i - coin]);
        }
    }

    return res[res.length - 1] === Infinity ? -1 : res[res.length - 1]
};"""

unique_paths_solution = """const uniquePaths = function(m, n, memo = {}) {
    const key = m + ',' + n
    if (key in memo) return memo[key]

    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;

    memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
    return memo[key]
};"""

house_robber_solution = """const rob = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    if (nums.length === 2) {
        return Math.max(nums[0], nums[1])
    }

    let res = new Array(nums.length);
    res[0] = nums[0]
    res[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        res[i] = Math.max(res[i - 2] + nums[i], res[i - 1]);
    }

    return res[res.length - 1]
};"""
