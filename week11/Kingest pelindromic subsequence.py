# USING O(N) SPACE AND TABULATION

class Solution:

    def longestPalinSubseq(self, s):
        
        n = len(s)
        cur = [0] * n
        prev = [0] * n
        
        for i in range(n - 1, -1, -1):
            cur[i] = 1
            for j in range(i + 1, n):
                if i == j:
                    cur[j] = 1
                elif s[i] == s[j]:
                    cur[j] = 2 + prev[j - 1]
                else:
                    cur[j] = max( cur[j - 1], prev[j] )
            prev = cur[:]
                    
        return cur[n - 1]
                    
                
      