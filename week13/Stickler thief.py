class Solution:  
    def findMaxSum(self, arr):
        
        n = len(arr)
        
        cur, nxt, nxter = 0, 0, 0
        
        for ind in range(n - 1, -1, -1):
            
            loot = arr[ind] + nxter
            
            not_loot = 0 + nxt
            
            cur = max(loot, not_loot)
            
            nxter = nxt
            
            nxt = cur
            
        return cur
            
        