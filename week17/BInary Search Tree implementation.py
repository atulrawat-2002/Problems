class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

    

def insertion(root, val):
    if not root:
        node = TreeNode(val)
        return node
    
    if val < root.val:
        root.left = insertion(root.left, val)

    if val >= root.val:
        root.right = insertion(root.right, val)

    return root


values = [8, 9, 3, 5, 1, 6, 0]
root = None
for val in values:
    root = insertion(root, val)

ans = []

def dfs(root):
    if not root:
        return
    dfs(root.left)
    ans.append(root.val)
    dfs(root.right)

    return

dfs(root)

print(ans)
