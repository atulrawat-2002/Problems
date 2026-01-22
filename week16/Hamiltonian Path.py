def DFS(node, adj, vis, count, n):
    
    vis[node] = True
    count[0] += 1
    
    if count[0] == n:
        return True
        
    for nei in adj[node]:
        
        if not vis[nei]:
            if DFS(nei, adj, vis, count, n):
                return True
    
    vis[node] = False
    count[0] -= 1
    return False

class Solution:
    def check(self, n, m, edges): 
        
        adj = [[] for _ in range(n)]
        
        for u, v in edges:
            adj[u - 1].append(v - 1)
            adj[v - 1].append(u - 1)
            
        for start in range(n):
            
            count = [0]
            vis = [False] * n
            
            if DFS(start, adj, vis, count, n):
                return True
            
        return False