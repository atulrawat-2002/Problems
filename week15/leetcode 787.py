import queue
class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        
        dist = [float('inf')] * n
        dist[src] = 0
        adj = [[] for _ in range(n)]

        for u, v, w in flights:
            adj[u].append((v, w))

        q = queue.Queue()
        q.put((0, src, 0))

        while not q.empty():
            stops, node, d = q.get()

            if stops > k:
                continue

            for v, w in adj[node]:
                if d != float('inf') and d + w < dist[v] and stops <= k:
                    dist[v] = d + w
                    temp = stops + 1
                    q.put((temp, v, dist[v]))

        return dist[dst] if dist[dst] != float('inf') else -1