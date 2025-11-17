class Solution:
    def wordBreak(self, s, d):
        
        d = set(d)
            
        n = len(s)
        
        dp = [False] * (n + 1)
        
        dp[n] = True
        
        for i in range(n - 1, -1, -1):
            
            for w in d:
                
                if s.startswith(w, i):
                    
                    if i + len(w) <= n:
                        if dp[i + len(w)]:
                            dp[i] = True
            
        
        return dp[0]
        
        