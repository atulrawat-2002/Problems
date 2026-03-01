class Solution:
	def pushZerosToEnd(self, arr):
	    
	    cur = 0
	    
	    for i in range(len(arr)):
	        
	        if arr[i] != 0:
	            
	            arr[cur], arr[i] = arr[i], arr[cur]
	            cur += 1
	            
	           
	    return arr