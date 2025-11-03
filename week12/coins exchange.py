class Solution:
    def count(self, coins, sum):   
        
        n = len(coins)
        dp = [[0] * (sum+1) for _ in range(n)]
        
        for i in range(sum+1):
            dp[0][i] = 1 if i % coins[0] == 0 else 0
            
            
        for i in range(1, n):
            for j in range(0, sum + 1):
                dp[i][j] += dp[i - 1][j]
                
                if coins[i] <= j:
                    dp[i][j] += dp[i][j - coins[i]]
                    
        return dp[n - 1][sum]
                
        