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
                    
                
#  USING O(n2) SPACE

class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:

        n = len(s)

        dp = [[0] * n for _ in range(n)]

        for i in range(n - 1, -1, -1):
            for j in range(i, n - 1):
                if i == j:
                    dp[i][j] = 1
                elif s[i] == s[j]:
                    dp[i][j] = 2 + dp[i + 1][j - 1]
                else:
                    dp[i][j] = max( dp[i + 1][j], dp[i][j - 1] )

        return dp[0][n - 1]
        