import heapq


class Solution:
    def minCost(self, houses):
        
        n = len(houses)
        vis = [False] * n
        minDist = [float('inf')] * n
        h = []
        cost = 0
        
        heapq.heappush(h, (0, 0))
        minDist[0] = 0
        
        
        while h:
            
            w, node = heapq.heappop(h)
            
            if vis[node]:
                continue
            
            vis[node] = True
            cost += w
            
            for nei in range(n):
                if not vis[nei]:
                    
                    d = abs(houses[node][0] - houses[nei][0]) + abs(houses[node][1] - houses[nei][1])
                    
                    if d < minDist[nei]:
                        minDist[nei] = d
                        heapq.heappush(h, (d, nei))
                    
        return cost
                
                
                
                