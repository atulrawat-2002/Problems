#     USING MIN AND MAX HEAP IN N LOG N

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
                
                
            
# USING DEQUE AND o(n) TIME COMPLEXITY

class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        left = 0
        ans = 0

        min_q = deque()
        max_q = deque()

        for right in range(len(nums)):

            while max_q and max_q[-1] < nums[right]:
                max_q.pop()

            while min_q and min_q[-1] > nums[right]:
                min_q.pop()

            min_q.append(nums[right])
            max_q.append(nums[right])

            while max_q[0] - min_q[0] > limit:

                if nums[left] == min_q[0]:
                    min_q.popleft()
                if nums[left] == max_q[0]:
                    max_q.popleft()
                left += 1

            ans = max(ans, right - left + 1)

        return ans


        