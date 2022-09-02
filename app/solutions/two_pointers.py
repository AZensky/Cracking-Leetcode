valid_palindrome_solution = """const isPalindrome = function(s) {
    let alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let newStr = '';

    for (let char of s) {
        if (alphanum.includes(char.toLowerCase())) {
            newStr += char.toLowerCase();
        }
    }

    return newStr.split('').reverse().join('') === newStr;
};"""

merge_sorted_array_solution = """const merge = function(nums1, m, nums2, n) {
    let lastIdx = m + n - 1;

    while (m > 0 && n > 0) {
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[lastIdx] = nums1[m - 1];
            m--;
            lastIdx--;
        }
        else {
            nums1[lastIdx] = nums2[n - 1];
            n--;
            lastIdx--;
        }
    }

    while (m > 0) {
        nums1[lastIdx] = nums1[m - 1];
        m--;
        lastIdx--;
    }

    while (n > 0) {
        nums1[lastIdx] = nums2[n - 1];
        n--;
        lastIdx--;
    }

    return nums1;
};"""

three_sum_solution = """const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let curr = nums[i];
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let threeSum = curr + nums[l] + nums[r];

            if (threeSum > 0) r--;

            else if (threeSum < 0) l++;

            else {
                res.push([curr, nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1]) {
                    l++;
                }
            }
        }
    }

    return res;
};"""

conatiner_with_most_water_solution = """const maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let res = 0;

    while (l < r) {
        let maxHeight = Math.min(height[l], height[r]);
        let width = r - l;
        let area = maxHeight * width;

        res = Math.max(res, area);

        if (height[l] <= height[r]) l++;
        else r--;
    }

    return res;
};"""
