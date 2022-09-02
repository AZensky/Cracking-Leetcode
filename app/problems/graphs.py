number_of_islands = {
    'name': 'Number of Islands',
    'category': 'Graphs',
    'description': """Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.""",
    'example': '''Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/number-of-islands/'
}

max_area_of_island = {
    'name': 'Max Area of Island',
    'category': 'Graphs',
    'description': """You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.""",
    'example': '''Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/max-area-of-island/'
}

clone_graph = {
    'name': 'Clone Graph',
    'category': 'Graphs',
    'description': """Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.""",
    'example': '''Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/clone-graph/'
}

rotting_oranges = {
    'name': 'Rotting Oranges',
    'category': 'Graphs',
    'description': """You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.""",
    'example': '''Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/rotting-oranges/'
}

word_search = {
    'name': 'Word Search',
    'category': 'Graphs',
    'description': """Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.""",
    'example': '''Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true''',
    'difficulty': 'Medium',
    'link': 'https://leetcode.com/problems/word-search/'
}
