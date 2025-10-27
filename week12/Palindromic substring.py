class Solution:
    def countPS(self, s):
        
        def count_palindromes(left, right):
            ans = 0
            while left >= 0 and right < n and s[left] == s[right]:
                if right - left >= 1:
                    ans += 1
                left -= 1
                right += 1
            return ans
        
        n = len(s)
        ans = 0
        
        for i in range(n):
            ans += count_palindromes(i, i)
            ans += count_palindromes(i, i + 1)
                
        return ans
                
        