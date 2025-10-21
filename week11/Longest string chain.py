class Solution:
    def longestStrChain(self, words: List[str]) -> int:

        n = len(words)
        dp = {}
        ans = 1
        words.sort(key = len)

        for w in words:
            dp[w] = 1
            for i in range( len(w) ):
                temp = w[:i] + w[i+1:]
                if temp in dp:
                    dp[w] = max( dp[w], dp[temp] + 1 )
                ans = max( ans, dp[w] )

        return ans

