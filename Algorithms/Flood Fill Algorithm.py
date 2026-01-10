class Solution:
	def floodFill(self, image, sr, sc, newColor):
	    
	    def change_color(x, y, grid, newColor, original_color):
	        
	        grid[x][y] = newColor
	        
	        del_row = [1, -1, 0, 0]
	        del_col = [0, 0, -1, 1]
	        
	        for i in range(4):
	        
    	        row = x + del_row[i]
    	        col = y + del_col[i]
    	        
    	        if 0 <= row < m and 0 <= col < n and grid[row][col] == original_color:
    	            change_color(row, col, grid, newColor, original_color)
	    
	    m = len(image)
	    n = len(image[0])
	    original_color = image[sr][sc]
	    
	    if original_color == newColor:
	        return image
	    
	    grid = [row[:] for row in image]
	    
	    change_color(sr, sc, grid, newColor, original_color)
	    
	    return grid
	    
	    
	    
	    
	    
	    
	    
