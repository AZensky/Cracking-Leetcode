invert_binary_tree = {
    'name': 'Invert Binary Tree',
    'category': 'Trees',
    'description': """Given the root of a binary tree, invert the tree, and return its root.""",
    'example': '''Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]''',
    'difficulty': 'Easy',
    'link': 'https://leetcode.com/problems/invert-binary-tree/'
}

max_depth_binary_tree = {
    'name': 'Maximum Depth of Binary Tree',
    'category': 'Trees',
    'description': """Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.""",
    'example': '''Input: root = [3,9,20,null,null,15,7]
Output: 3''',
    'difficulty': 'Easy',
    'link': 'https://leetcode.com/problems/maximum-depth-of-binary-tree/'
}


right_side_view = {
    'name': 'Binary Tree Right Side View',
    'category': 'Trees',
    'description': """Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.""",
    'example': '''Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/binary-tree-right-side-view/'
}


count_good_nodes = {
    'name': 'Count Good Nodes in Binary Tree',
    'category': 'Trees',
    'description': """Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.""",
    'example': '''Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation:
Root Node (3) is always a good node.
Node 4 -> (3,4) is the maximum value in the path starting from the root.
Node 5 -> (3,4,5) is the maximum value in the path
Node 3 -> (3,1,3) is the maximum value in the path.''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/'
}

validate_bst = {
    'name': 'Validate Binary Search Tree',
    'category': 'Trees',
    'description': """Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

    - The left subtree of a node contains only nodes with keys less than the node's key.
    - The right subtree of a node contains only nodes with keys greater than the node's key.
    - Both the left and right subtrees must also be binary search trees.""",
    'example': '''Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/validate-binary-search-tree/'
}
