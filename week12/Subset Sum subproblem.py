class Solution:
    def isSubsetSum (self, arr, sum):
        
        n = len(arr)
        prev = [False] * (sum + 1)
        
        prev[0] = True
            
        for s in range(1, sum + 1):
            prev[s] = (arr[0] == s)
            
            
        for ind in range(1, n):
            cur = [False] * (sum + 1)
            cur[0] = True
            for s in range(1, sum + 1):
                take = False
                not_take = prev[s]
                
                if arr[ind] <= s:
                    take = prev[s -  arr[ind]]
                
                cur[s] = take or not_take
            prev = cur[:]
                
                
        return prev[sum]
                
            
            
            
            
            
            