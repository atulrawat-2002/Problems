# IN o(N^2) TC

class Solution:
    def longestPalindrome(self, s: str) -> str:

        def solve(i, j):
            if i >= j:
                return True
            
            elif dp[i][j] != -1:
                return dp[i][j]

            elif s[i] == s[j]:
                dp[i][j] = solve(i + 1, j - 1)
                return dp[i][j]
            
            else:
                dp[i][j] = False
                return False

        n = len(s)
        dp = [[-1] * n for _ in range(n)]
        start = 0 
        maxi = float('-inf')

        for i in range(0, n):
            for j in range(i, n):
                if solve(i, j):
                    if maxi < j - i  + 1:
                        maxi = j - i + 1
                        start = i

        return s[start:maxi + start]
        