class Solution:
    def countPrimeSetBits(self, left: int, right: int) -> int:
        ans = 0

        def check(num):
            count = 0

            for i in range(32):
                if num & (1 << i):
                    count += 1

            primes = [2, 3, 5, 7, 11, 13, 17, 19]
            return True if count in primes else False


        for i in range(left, right + 1):
            if check(i):
                ans += 1

        return ans