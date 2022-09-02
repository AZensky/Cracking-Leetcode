contains_duplicate_solution = """const containsDuplicate = function(nums) {
    let set = new Set(nums);

    return set.size !== nums.length;
};"""

squares_of_a_sorted_array_solution = """const sortedSquares = function(nums) {
    let res = []
    let l = 0;
    let r = nums.length - 1;
    let pos = r;

    for (let i = 0; i < nums.length; i++) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            res[pos] = nums[l] ** 2;
            l++;
            pos--;
        } else {
            res[pos] = nums[r] ** 2;
            r--;
            pos--;
        }
    }

    return res;
};
"""

sort_colors_solution = """const sortColors = function(nums) {
    let redCount = 0;
    let whiteCount = 0;
    let blueCount = 0;

    for (let num of nums) {
        if (num === 0) redCount++;
        if (num === 1) whiteCount++;
        if (num === 2) blueCount++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (redCount > 0) {
            nums[i] = 0;
            redCount--;
        }
        else if (whiteCount > 0) {
            nums[i] = 1;
            whiteCount--;
        }
        else {
            nums[i] = 2;
            blueCount--;
        }
    }

    return nums;
};"""

product_of_array_except_self_solution = """const productExceptSelf = function(nums) {
    let prefixes = new Array(nums.length).fill(1);
    let postfixes = new Array(nums.length).fill(1);

    let res = new Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++) {
        prefixes[i] = nums[i - 1] * prefixes[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        postfixes[i] = nums[i + 1] * postfixes[i + 1];
    }

    for (let i = 0; i < res.length; i++) {
        res[i] = postfixes[i] * prefixes[i];
    }

    return res;
};"""
