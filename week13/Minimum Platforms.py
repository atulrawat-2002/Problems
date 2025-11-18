class Solution:    
    def minPlatform(self, arr, dep):
        
        arr.sort()
        dep.sort()
        n = len(arr)
        
        i = 0
        j = 0
        
        max_count = 0
        count = 0
        
        while(i < n ):
            
            if arr[i] <= dep[j]:
                i += 1
                count = count + 1
            else:
                j += 1
                count = count - 1
            max_count = max(max_count, count)
                
        return max_count