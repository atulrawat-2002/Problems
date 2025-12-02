class Solution:
    def isCyclic(self, V, edges):
        
        def dfs(node):
            vis[node] = True
            path[node] = True
            
            for nei in adj[node]:
                if not vis[nei]:
                    if dfs(nei):
                        return True
                elif path[nei]:
                    return True
                    
            path[node] = False
            return False
                    
                    
        adj = [[] for _ in range(V)]
        
        for u, v in edges:
            adj[u].append(v)
            
        vis = [False] * V
        path = [False] * V
        
        for start in range(V):
            if not vis[start]:
                if dfs(start):
                    return True
        
        return False
                    
                    
                    
                    
                    
                    