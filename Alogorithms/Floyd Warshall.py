#User function template for Python

class Solution:
	def floydWarshall(self, dist):
	    
	    n = len(dist[0])
	    MAX = 10 ** 8
	    
	    for k in range(n):
	        for i in range(n):
	            for j in range(n):
	                
	                if dist[i][k] == MAX  or dist[k][j] == MAX:
	                    continue
	                
	                dist[i][j] = min( dist[i][j], dist[i][k] + dist[k][j] )