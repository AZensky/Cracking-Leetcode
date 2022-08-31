two_sum_solution = """var twoSum = function(nums, target) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]

        if (diff in map) return [map[diff], i];

        map[nums[i]] = i;
    }

};"""

majority_element_solution = """var majorityElement = function(nums) {
    let map = {};
    let arrLength = nums.length;
    let n = arrLength / 2
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }

        if (map[nums[i]] > n) {
            return nums[i];
        }
    }
};"""

valid_anagram_solution = """var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1;
    }

    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;
};"""

group_anagrams_solution = """var groupAnagrams = function(strs) {
    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let curr = strs[i];
        let sorted = curr.split('').sort().join('');

        if (map[sorted]) {
            map[sorted].push(curr);
        } else {
            map[sorted] = [curr];
        }
    }


    return Object.values(map)
};"""

top_k_frequent_elements_solution = """var topKFrequent = function(nums, k) {
    let map = {};

    for (let num of nums) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    let entries = Object.entries(map)

    entries.sort((a, b) => b[1] - a[1])

    let res = [];

    while (k > 0) {
        let ele = entries.shift();
        res.push(ele[0]);
        k--;
    }
    return res;
};"""
