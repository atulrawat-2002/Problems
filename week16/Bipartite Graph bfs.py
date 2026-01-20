from collections import deque

class Solution:
    def isBipartite(self, V, edges):
        # code here
        
        adj = [[] for _ in range(V)];
        color = [-1] * V;
        
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
            
        q = deque()
        
        q.append(0)
        color[0] = 0
        
        while q:
            node = q.popleft()
            
            for nei in adj[node]:
                if color[nei] == color[node]:
                    return False
                elif color[nei] == -1:
                    color[nei] = (color[node] + 1) % 2
                    q.append(nei)
                    
        return True