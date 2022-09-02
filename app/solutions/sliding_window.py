best_time_to_buy_sell_stock_solution = """const maxProfit = function(prices) {
    let maxP = 0;

    let l = 0;
    let r = 0;

    while (r < prices.length) {
        if (prices[r] < prices[l]) l = r;
        maxP = Math.max(maxP, prices[r] - prices[l]);
        r++
    }

    return maxP;
};"""

longest_substring_without_repeating_chars_solution = """const lengthOfLongestSubstring = function(s) {
    let chars = {};
    let l = 0;
    let r = 0;

    let res = 0;

    while (r < s.length) {
        if (chars[s[r]] && chars[s[r]] === 1) {
            while (chars[s[r]] === 1) {
                chars[s[l]]--;
                l++;
            }
        }

        chars[s[r]] ? chars[s[r]]++ : chars[s[r]] = 1;
        res = Math.max(res, r - l + 1);
        r++
    }

    return res;
};"""

minimum_size_subarray_sum_solution = """const minSubArrayLen = function(target, nums) {
    let windowSum = 0;
    let windowStart = 0
    let minLength = Infinity;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];

        while (windowSum >= target) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= nums[windowStart];
            windowStart++;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }

    return minLength;
};"""
