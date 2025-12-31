
class Solution:
    def bellmanFord(self, V, edges, src):
        
        INF = 100000000
        dis = [INF] * V
        dis[src] = 0
   
        for _ in range(V - 1):
            updated = False
            for u, v, w in edges:
                if dis[u] != INF and dis[u] + w < dis[v]:
                    dis[v] = dis[u] + w
                    updated = True
            if not updated:
                break
        
        for u, v, w in edges:
            if dis[u] != INF and dis[u] + w < dis[v]:
                return [-1]
                
        return dis
        