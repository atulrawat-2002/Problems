#  GFG VERSION

class Solution:
	def minJumps(self, arr):
	    
	    l = 0
	    r = 0
	    jump = 0
	    n = len(arr)
	    
	    while r < n - 1:
	        farthest = 0
	        
	        for ind in range(l, r + 1):
	            farthest = max( farthest, ind + arr[ind] )
	            
	        l = r + 1
	        r = farthest
	        if r == 0:
	            return -1
	        jump += 1
	        
	    return jump
	

    # LEETCODE VERSION
	
    class Solution:
    def jump(self, nums: List[int]) -> int:

        l = 0
        r = 0
        jump = 0
        n = len(nums)

        while r < n - 1:
            farthest = 0

            for ind in range(l, r + 1):
                farthest = max( farthest, ind + nums[ind] )

            l = r + 1
            r = farthest
            jump += 1

        return jump
        
	    