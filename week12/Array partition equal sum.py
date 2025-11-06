class Solution:
    def equalPartition(self, arr):
         
        total = sum(arr)   
        target = total // 2
        n = len(arr)
        
        cur = [False] * (total + 1)
        prev = [False] * (total + 1)
        
        if total % 2 != 0:
            return False
            
        for s in range(total + 1):
         prev[s] = True if s + arr[0] == target else False
            
        for ind in range(1, n):
            for s in range(total, -1, -1):
                take = False
                if s + arr[ind] <= target:
                    take = prev[s + arr[ind]]
                not_take = prev[s]
            
                cur[s] = take or not_take
            prev = cur[:]
                
        return prev[0]
        
        
        