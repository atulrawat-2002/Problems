
class Solution:
    def replaceBit(self, N, K):
        
        length = N.bit_length()
        
        if(K > length):
            return N
        
        return N & ~(1 << length - K)
        
        