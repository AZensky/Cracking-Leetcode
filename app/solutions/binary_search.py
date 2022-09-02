binary_search_solution = """const search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        }
        else if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};"""

search_rotated_sorted_array_solution = """const search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m] === target) return m;

        if (nums[l] <= nums[m]) {
            if (target >=  nums[l] && target <= nums[m]) {
                r = m - 1;
            }
            else l = m + 1;
        }
        else {
            if (target >= nums[m] & target <= nums[r]) {
                l = m + 1;
            }
            else r = m - 1;
        }
    }

    return -1;
};"""

find_minimum_rotated_sorted_array_solution = """const findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let m = Math.floor((l + r) / 2);

        if (nums[m] > nums[r]) l = m + 1;

        else r = m;
    }

    return nums[l]
};"""

search_2d_matrix_solution = """const searchMatrix = function(matrix, target) {
    let top = 0;
    let bot = matrix.length - 1;
    let rowLen = matrix[0].length

    let targetRow;

    while (top <= bot) {
        let mid = Math.floor((top + bot) / 2);
        if (matrix[mid][0] > target) bot = mid - 1;
        else if (matrix[mid][rowLen - 1] < target) top = mid + 1;
        else {
            targetRow = mid;
            break;
        }
    }

    if (targetRow === undefined) return false;

    let l = 0;
    let r = rowLen - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (matrix[targetRow][mid] > target) r = mid - 1;
        else if (matrix[targetRow][mid] < target) l = mid + 1;
        else return true;
    }

    return false;
};"""
