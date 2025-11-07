class Solution:
    def maxProfit(self, prices, k):
        
        n = len(prices)
        prev = [[0 for _ in range(2)] for _ in range(k + 1)]
        cur = [[0 for _ in range(2)] for _ in range(k + 1)]
            
        for ind in range(n - 1, -1, -1):
            for trans in range(k - 1, -1, -1):
                
                    buy = -prices[ind] + prev[trans][0]
                    skip = prev[trans][1]
                
                    cur[trans][1] = max(buy, skip)
                    
                    sell = prices[ind] + prev[trans + 1][1]
                    skip = prev[trans][0]
                
                    cur[trans][0] = max(sell, skip)
            prev = cur[:]
                    
        return cur[0][1]
                
        
        
                
            
            