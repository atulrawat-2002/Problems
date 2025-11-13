#User function Template for python3
class Solution:
	def countWays(self, digits):
	    
	    n = len(digits)
	        
	    cur, nxt, last = 0, 1, 0
	    
	    for ind in range(n - 1, -1, -1):
	        
	        single = 0
	        
	        if 0 < int(digits[ind]) < 27:
	            single = nxt
	        
	        double = 0
	        
	        if ind + 1 < n and digits[ind] != '0' and 0 < int(digits[ind:ind+2]) < 27:
	            double = last
	        
	        cur = single + double
	        nxt, last = cur, nxt
	        
	    return cur
	    
	    
	    
	    
	    