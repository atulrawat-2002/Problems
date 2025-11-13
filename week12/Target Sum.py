class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:

        total = sum(nums)
        n = len(nums)
        prev = [0] * (total + 1)
        
        for s in range(total + 1):
            prev[s] = 1 if s - (total - s) == target else 0

        for i in range(1, n + 1):
            for s in range(total + 1):
                if s + nums[i - 1] <= total:
                    prev[s] = prev[s + nums[i - 1]] + prev[s]

        return prev[0]
            
