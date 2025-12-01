class Solution:
    def topoSort(self, V, edges):
        
        def dfs(node):
            vis[node] = True
            for i in adj[node]:
                if not vis[i]:
                    dfs(i)
            stack.append(node)
                    
        
        adj = [[] for _ in range(V)]
        
        for u, v in edges:
            adj[u].append(v)
            
        vis = [False] * V
        stack = []
        ans = []
        
        for node in range(V):
            if not vis[node]:
                dfs(node)
            
            
        while( len(stack) ):
            val = stack.pop()
            ans.append(val)
            
        return ans
            