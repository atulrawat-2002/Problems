import heapq

class Solution:
    def longestSubarray(self, arr, x):
        #code here
        start = 0
        max_len = 0
        n = len(arr)
        left = 0
        
        min_heap = []
        max_heap = []
        
        for right in range(n):
            heapq.heappush(min_heap, (arr[right], right))
            heapq.heappush(max_heap, (-arr[right], right))
            
            while -max_heap[0][0] - min_heap[0][0] > x:
                left += 1
                
                while min_heap and min_heap[0][1] < left:
                    heapq.heappop(min_heap)
                
                while max_heap and max_heap[0][1] < left:
                    heapq.heappop(max_heap)
                
            if right - left + 1 > max_len:
                max_len = right - left + 1
                start = left
                
        return arr[start: start + max_len]
                
                
            
        