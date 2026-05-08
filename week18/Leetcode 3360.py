class Solution:
    def maxValue(self, nums: List[int]) -> List[int]:
        n = len(nums)
        pre = [0] * n
        suf = [0] * n
        res = [0] * n

        pre[0] = nums[0]

        for i in range(1, n):
            pre[i] = max( nums[i], pre[i - 1] )

        suf[n - 1] = nums[n - 1]

        for i in range(n-2, -1, -1):
            suf[i] = min(suf[i + 1], nums[i])

        res[n - 1] = pre[n - 1]

        for i in range(n-2, -1, -1):
            if pre[i] > suf[i + 1]:
                res[i] = res[i + 1]
            else:
                res[i] = pre[i]

        return res