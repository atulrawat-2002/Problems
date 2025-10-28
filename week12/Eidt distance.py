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