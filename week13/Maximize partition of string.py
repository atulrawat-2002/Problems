class Solution:
    def maxPartitions(self , s):
        
        mapping = {ch: i for i, ch in enumerate(s)}
        
        count = 0
        last = -1
        n = len(s)
                
        for i, ch in enumerate(s):
            last = max(last, mapping[ch])
            if i == last:
                count += 1
                
        return count