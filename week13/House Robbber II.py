class Solution:
    def rob(self, arr: List[int]) -> int:
        
        def get_max(start, end):
            
            cur, nxt, nxter = 0, 0, 0
            
            for ind in range(end, start - 1, -1):
                
                rob = arr[ind] + nxter
                
                not_rob = 0 + nxt
                
                cur = max(rob, not_rob)
                
                nxter, nxt = nxt, cur
                
            return cur
            
            
        n = len(arr)

        if n == 1:
            return arr[0]
        
        cur1 = get_max(0, n - 2)
        cur2 = get_max(1, n - 1)
        
        return max(cur1, cur2)