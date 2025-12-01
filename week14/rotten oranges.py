from queue import Queue

class Solution:
	def orangesRot(self, mat):
	    
	    q = Queue()
	    n = len(mat)
	    m = len(mat[0])
	    vis = [[True for _ in range(m)] for _ in range(n)]
	    grid = [[0 for _ in range(m)] for _ in range(n)]
	    count = 0
	    total_time = 0
	    
	    for i in range(n):
	        
	        for j in range(m):
	            grid[i][j] = mat[i][j]  
	            if mat[i][j] == 2:
	                vis[i][j] = False
	                q.put([[i, j], 0])
	                
	            if mat[i][j] == 1:
	                count += 1
	                
	    del_row = [0, 0, 1, -1]
	    del_col = [1, -1, 0, 0]
	    done = 0
	    
	    while(not q.empty()):
	        
	        s = q.qsize()
	        v = q.get()
    	    i = v[0][0]
    	    j = v[0][1]
	        t = v[1]
	            
    	    for cur in range(4):
    	         
    	        row = i + del_row[cur]
    	        col = j + del_col[cur]
    	            
    	        if 0 <= row < n and 0 <= col < m and grid[row][col] != 0 and grid[row][col] != 2 and vis[row][col] :
    	                
        	        grid[row][col] = 2
        	        done += 1
        	        vis[row][col] = False
        	        q.put([[row, col], t + 1])
    	                
    	    total_time = max(total_time, t)
    	        
        return -1 if done != count else total_time
	   