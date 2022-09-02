number_of_islands_solution = """const numIslands = function(grid) {
    let islands = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                islands++;
                dfs(r, c);
            }
        }
    }

    return islands

    function dfs(r, c) {
        let key = '${r},${c}';
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === '0') return;

        grid[r][c] = '0';

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }
};"""

max_area_of_island_solution = """const maxAreaOfIsland = function(grid) {
    let res = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                res = Math.max(res, dfs(r, c))
            }
        }
    }

    return res;


    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= grid.length|| c >= grid[r].length || grid[r][c] !== 1) return 0;

        grid[r][c] = 0;

        let area = 1;

        area += dfs(r + 1, c);
        area += dfs(r - 1, c);
        area += dfs(r, c + 1);
        area += dfs(r, c - 1);

        return area
    }
};"""

clone_graph_solution = """const cloneGraph = function(node) {
    let map = {};

    function dfs(node) {
        if (!node) return;

        if (!map[node.val]) {
            map[node.val] = new Node(node.val);

            for (let neighbor of node.neighbors) {
                map[node.val].neighbors.push(dfs(neighbor));
            }
        }

        return map[node.val];
    }

    return dfs(node)
};"""

rotting_oranges_solution = """const orangesRotting = function(grid) {
    let fresh = 0;
    const queue = [];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) fresh++;
            if (grid[r][c] === 2) queue.push([r, c]);
        }
    }

    let time = 0;

    while (fresh && queue.length) {
        let currRotten = queue.length;
        for (let i = 0; i < currRotten; i++) {
            let [r, c] = queue.shift();
            if (r - 1 >= 0 && grid[r - 1][c] === 1) {
                fresh--;
                queue.push([r - 1, c])
                grid[r - 1][c] = 2;
            }

            if (r + 1 < grid.length && grid[r + 1][c] === 1) {
                fresh--;
                queue.push([r + 1, c])
                grid[r + 1][c] = 2;
            }

            if (c - 1 >= 0 && grid[r][c - 1] === 1) {
                fresh--;
                queue.push([r, c - 1])
                grid[r][c - 1] = 2;
            }

            if (c + 1 < grid[r].length && grid[r][c + 1] === 1) {
                fresh--;
                queue.push([r, c + 1])
                grid[r][c + 1] = 2;
            }
        }
        time++;
    }

    return fresh === 0 ? time : -1

};"""

word_search_solution = """const exist = function(board, word) {
    let visited = new Set();

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (dfs(r, c, 0, visited)) return true;
        }
    }

    return false;

    function dfs(r, c, i) {
        let key = `${r},${c}`
        if (r < 0 || c < 0 || r >= board.length || c >= board[r].length || board[r][c] !== word[i] || visited.has(key)) return false;

        if(i === word.length - 1) return true;

        visited.add(key);

        let res = dfs(r + 1, c, i + 1) || dfs(r - 1 , c, i + 1) || dfs(r, c + 1, i + 1) || dfs(r, c - 1, i + 1);
        visited.delete(key)
        return res;
    }
};"""
