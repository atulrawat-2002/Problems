#User function Template for python3
class Solution:
    def countWays(self, arr):
            
            
        n = len(arr)
        dp = [[[0 for _ in range(2)] for _ in range(n)] for _ in range(n)]
                        
        for i in range(n):
            dp[i][i][1] = 1 if arr[i] == 'T' else 0
            dp[i][i][0] = 1 if arr[i] == 'F' else 0
            
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                
                ways = 0
            
                for ind in range(i + 1, j, 2):
                
                    rt = dp[ind + 1][j][1]
                    lt = dp[i][ind - 1][1]
                
                    rf = dp[ind + 1][j][0]
                    lf = dp[i][ind - 1][0]
                
                    if arr[ind] == '&':
                        dp[i][j][1] += rt * lt
                        dp[i][j][0] += (rt * lf) + (lt * rf) + (rf * lf)
                    elif arr[ind] == '|':
                        dp[i][j][1] += (rt * lf) + (lt * rf) + (rt * lt)
                        dp[i][j][0] += rf * lf
                    else:
                        dp[i][j][1] += (rt * lf) + (lt * rf)
                        dp[i][j][0] += (rt * lt) + (lf * rf)
        
        
        return dp[0][n - 1][1]
                
                
                        
                        
                        
                        
                    