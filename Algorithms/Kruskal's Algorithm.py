import heapq
class Solution:
    def spanningTree(self, V, edges):
        # code here
        
        def findParent(u):
            
            if u == parent[u]:
                return u
                
            parent[u] = findParent(parent[u])
            return parent[u]
            
        def findUnion(u, v):
            
            pv = findParent(v)
            pu = findParent(u)
            
            if pv != pu:
                
                if rank[pv] < rank[pu]:
                    
                    parent[pv] = pu
                    
                elif rank[pu] < rank[pv]:
                    
                    parent[pu] = pv
                    
                else:
                    
                    parent[pv] = pu
                    rank[pu] += 1
                    
                    
                    
        parent = [0] * V
        rank = [0] * V
        totalEdges = 0
        cost = 0
        q = []
        
        for i in range(V):
            parent[i] = i
            
        
        for u, v, w in edges:
            heapq.heappush(q, (w, u, v))
            
            
        while q:
            
            w, u, v = heapq.heappop(q)
            
            if findParent(u) != findParent(v):
                cost += w
                totalEdges += 1
                findUnion(u, v)
                if totalEdges == V - 1:
                    break
            
        return cost
            
            
            
            
            