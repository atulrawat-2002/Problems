import heapq

class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:

        adj = [[] for _ in range(n + 1)]
        for u, v, t in times:
            adj[u].append((v, t))

        dist = [float('inf')] * (n + 1)
        dist[k] = 0

        pq = [(0, k)]

        while pq:
            d, node = heapq.heappop(pq)

            if d > dist[node]:
                continue

            for v, w in adj[node]:
                if dist[v] > dist[node] + w:
                    dist[v] = dist[node] + w
                    heapq.heappush(pq, (dist[v], v))

        ans = max(dist[1:])  
        return ans if ans != float('inf') else -1
