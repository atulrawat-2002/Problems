class Solution:
    def jobSequencing(self, deadline, profit):
        
        temp = []
        
        i = 0
        
        while i < len(deadline):
            
            temp.append( [deadline[i], profit[i]] )
            i += 1
            
        max_day = max(deadline)
        jobs = 0
        total_profit = 0
        
        temp.sort(key=lambda x: x[1], reverse=True)
        
        parent = [i for i in range(max_day + 1)]
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        for d, p in temp:
            
            slot = find(d)
            
            if slot == 0:
                continue
            
            parent[slot] = find(slot - 1)
            jobs += 1
            total_profit += p
            
        return [jobs, total_profit]
        
                