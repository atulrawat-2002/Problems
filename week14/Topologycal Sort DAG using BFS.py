from queue import Queue

class Solution:
    def topoSort(self, V, edges):
        
        adj = [[] for _ in range(V)]
        ind = [0] * V
        q = Queue()
        ans = []
        
        for u, v in edges:
            adj[u].append(v)
            
        
        for i in range(V):
            for j in adj[i]:
                ind[j] += 1
                
        for i in range(V):
            if ind[i] == 0:
                q.put(i)
            
        while( not q.empty() ):
            node = q.get()
            ans.append(node)
            
            for i in adj[node]:
                ind[i] -= 1
                if ind[i] == 0:
                    q.put(i)
                    
        return ans
            
            
            
            