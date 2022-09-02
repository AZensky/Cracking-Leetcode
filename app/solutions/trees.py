invert_binary_tree_solution = """const invertTree = function(root) {
    if (!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};"""

max_depth_binary_tree_solution = """const maxDepth = function(root) {
    if (!root) return 0
    let maxDepth = 0;

    let queue = [root];

    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        maxDepth++;
    }
    return maxDepth;
};"""

right_side_view_solution = """const rightSideView = function(root) {
    let res = [];

    if (!root) return [];

    const queue = [root];

    while (queue.length) {
        let levelSize = queue.length;

        let rightMost;
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            rightMost = curr.val;

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }

        res.push(rightMost);
    }

    return res;
};"""

count_good_nodes_solution = """const goodNodes = function(root) {
    if (!root) return 0
    let res = 0;

    function dfs(node, max) {
        if (!node) return;
        if (node.val >= max) res++;

        dfs(node.left, Math.max(max, node.val));
        dfs(node.right, Math.max(max, node.val));
    }

    dfs(root, root.val)
    return res;
};"""

validate_bst_solution = """const isValidBST = function(root) {

    function validate(node, leftBound, rightBound) {
        if (!node) return true;

        if (node.val <= leftBound || node.val >= rightBound) return false;

        return validate(node.left, leftBound, node.val) && validate(node.right, node.val, rightBound)
    }

    return validate(root, -Infinity, Infinity)
};"""
