class Solution:
    def isBridge(self, V, edges, c, d):
        # code here 
        
        def dfs(node):
            
            vis[node] = True
            for nei in adj[node]:
                if not vis[nei]:
                    dfs(nei)
            
        
        adj = [[] for _ in range(V)]
        vis = [False] * V
        
        for u, v in edges:
            if u == c and v == d or v == c and u == d:
                continue
            
            adj[u].append(v)
            adj[v].append(u)
            
        
        dfs(d)
        
        return not vis[c]
    