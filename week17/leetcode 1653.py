class Solution:
    def minimumDeletions(self, s: str) -> int:
        
        n = len(s)
        if (n == 1):
            return 0
        
        count = 0
        st = []
        for i in range(n - 1, -1, -1):
            if len(st) and s[i] == 'b' and st[-1] == 'a':
                    st.pop()
                    count += 1
                    continue
            st.append(s[i])

        return count