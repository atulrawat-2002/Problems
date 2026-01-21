def dfs(r, c, vis, grid):
        
    vis[r][c] = True
    area = 1

    del_row = [0, 0, 1, -1]
    del_col = [1, -1, 0, 0]

    for i in range(4):
        row = r + del_row[i]
        col = c + del_col[i]
        if 0 <= row < len(grid) and 0 <= col < len(grid[0]): 
            if grid[row][col] == 1 and not vis[row][col]:
                area += dfs(row, col, vis, grid)

    return area

        

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
            
        m = len(grid)
        n = len(grid[0])
        area = 0
        vis = [[False] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):

                if grid[i][j] == 1 and not vis[i][j]:
                    area = max(dfs(i, j, vis, grid), area)

        return area