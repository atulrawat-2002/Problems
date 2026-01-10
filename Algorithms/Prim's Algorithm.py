import heapq

class Solution:
    def spanningTree(self, V, edges):
        
        vis = [False] * V
        h = []
        cost = 0
        adj = [[] for _ in range(V)]
        
        for u, v, w in edges:
            adj[u].append((w, v))
            adj[v].append((w, u))
            
        heapq.heappush(h, (0, 0))
        
        while h:
            
            w, node = heapq.heappop(h)
            
            if vis[node]:
                continue
            
            vis[node] = True
            cost += w
            
            for wt, nei in adj[node]:
                if not vis[nei]:
                    heapq.heappush(h, (wt, nei))
                    
        return cost
        