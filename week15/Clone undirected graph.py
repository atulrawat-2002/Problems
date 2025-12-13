#User function Template for python3

'''
class Node:
    def __init__(self, val = 0, neighbors = []):
        self.val = val
        self.neighbors = neighbors
'''

class Solution():
    
    vis = {}
    
    def cloneGraph(self, node):
        
        if not node:
            return None
        
        if node not in self.vis:
            copy = Node(node.val)
            self.vis[node] = copy
            
            for nei in node.neighbors:
                copy.neighbors.append(self.cloneGraph(nei))
                
                
            return self.vis[node]
            
        else:
            return self.vis[node]
        
        
        
        
        