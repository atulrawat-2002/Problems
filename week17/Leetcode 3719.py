class Solution:
    def longestBalanced(self, nums: List[int]) -> int:
        
        n = len(nums)
        ans = 0

        for i in range(n):
            s = set()
            even = 0
            odd = 0
            s.add(nums[i])
            if nums[i] % 2 == 0:
                even += 1
            else:
                odd += 1
            for j in range(i + 1, n):
                if nums[j] in s:
                    if even == odd:
                        ans = max(ans, j - i + 1)
                    continue
                s.add(nums[j])
                if nums[j] % 2 == 0:
                    even += 1
                else:
                    odd += 1
                if even == odd:
                    ans = max(ans, j - i + 1)

        return ans