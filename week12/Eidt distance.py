# USING MEMOIZATION

class Solution:
	def editDistance(self, s1, s2):
	    def find(i, j):
	        
	        if i < 0: 
	            return j + 1
	        if j < 0:
	            return i + 1
	            
	        if dp[i][j] != -1:
	            return dp[i][j]
	            
	        if s1[i] == s2[j]:
	            dp[i][j] = find(i - 1, j - 1)
	            return dp[i][j]
	            
	        else:
	            dp[i][j] = 1 + min( find(i - 1, j - 1), find(i - 1, j), find(i, j - 1) )
	            return dp[i][j]
	            
	    
	dp = [[-1] * (len(s2) + 1) for _ in range((len(s1) + 1))]
	return find(len(s1) - 1, len(s2) - 1)


	# USING TABULATION BOTTOM UP APPROACH

	class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        dp = [[0] * (len(word2) + 1) for _ in range(len(word1) + 1)]

        for i in range(len(word2) + 1):
            dp[0][i] = i
        
        for i in range(len(word1) + 1):
            dp[i][0] = i

        for i in range(1, len(word1) + 1):
            for j in range(1, len(word2) + 1):

                if word1[i- 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = 1 + min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1])

        return dp[len(word1)][len(word2)]

