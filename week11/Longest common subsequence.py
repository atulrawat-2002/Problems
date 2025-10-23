# USING MEMOIZATION

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:

        def lcs_rec(n, m):
            if n < 0 or m < 0:
                return 0
            if dp[n][m] != -1:
                return dp[n][m]

            if text1[n] == text2[m]:
                dp[n][m] = lcs_rec(n - 1, m - 1) + 1
                return dp[n][m]
            else:
                dp[n][m] = max( lcs_rec( n - 1, m ), lcs_rec( n, m - 1 ) )
                return dp[n][m]


        n = len(text1)
        m = len(text2)

        dp = [[-1 for _ in range(m)] for _ in range(n)]

        return lcs_rec(n - 1, m - 1 )
        

# USING TABULATION (TOP DOWN APPROACH)