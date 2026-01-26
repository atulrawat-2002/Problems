import heapq
class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)
        vis = [[False] * n for _ in range(n)]
        q = []

        heapq.heappush(q, (grid[0][0], 0, 0))
        delR = [0, 0, -1, 1]
        delC = [1, -1, 0, 0]

        while q:

            time, r, c = heapq.heappop(q)
            if r == n - 1 and c == n - 1:
                return time 
            if vis[r][c]:
                continue
            vis[r][c] = True


            for i in range(4):
                row = r + delR[i]
                col = c + delC[i]

                if 0 <= row < n and 0 <= col < n and not vis[row][col]:
                    heapq.heappush(q, (max(time, grid[row][col]), row, col))