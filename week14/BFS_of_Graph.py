from queue import Queue

class Solution:
    def bfs(self, adj):
        
        n = len(adj)
        vis = [None] * n
        ans = []
        
        q = Queue()
        q.put(0)
        
        while(not q.empty()):
                
            s = q.qsize()
                
            while(s):
                value = q.get()
                if vis[value] is None:
                    vis[value] = True
                    ans.append(value)
                s -= 1
                for i in adj[value]:
                    if vis[i] is None:
                        q.put(i)

        
        return ans
                
            
            