class Solution:
    # Returns shortest distances from src to all other vertices
    def dijkstra(self, V, edges, src):
        
        
        adj = [[] for _ in range(V)]
        vis = [False] * V
        dist = [float('inf')] * V
        h = []
        
        for u, v, w in edges:
            adj[u].append((v, w))
            adj[v].append((u, w))
            
        dist[src] = 0
        
        count = V
        
        while count:
            node = -1
            value = float('inf')
            
            for i in range(V):
                
                if not vis[i] and value > dist[i]:
                    node = i
                    value = dist[i]
                    
            vis[node] = True
                    
            for nei, w in adj[node]:
                
                if not vis[nei]:
                    dist[nei] = min( dist[nei], dist[node] + w )
            count -= 1
                
                
        return dist
                
        
        
        
        