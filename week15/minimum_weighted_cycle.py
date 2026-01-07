import heapq

class Solution:
    def findMinCycle(self, V, edges):
        
        def shortestPath (V, src, dest, adj):
            
            dist = [float('inf')] * V
            dist[src] = 0
            
            pq = [(0, src)]
            
            
            while pq:
                
                d, u = heapq.heappop(pq)
                
                if d > dist[u]:
                    continue
                
                for v, w in adj[u]:
                    
                    if (u == src and v == dest) or (v == src and u == dest):
                        continue
                    
                    if dist[v] > dist[u] + w:
                        dist[v] = dist[u] + w
                        heapq.heappush(pq, (dist[v], v))
                        
            return dist[dest]
        
        adj = [[] for _ in range(V)]
        
        for u, v, w in edges:
            adj[u].append((v, w))
            adj[v].append((u, w))
            
        minCycle = float('inf')
        
        for edge in edges:
            
            u, v, w = edge
            
            dist = shortestPath(V, u, v, adj)
            
            if dist != float('inf'):
                minCycle = min(minCycle, dist + w)
                
        return minCycle
        

        
