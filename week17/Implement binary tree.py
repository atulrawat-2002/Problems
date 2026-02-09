from collections import deque

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def binaryTree():

    value = int(input("Enter the value for node: "))
    if value == -1:
        return None
    root = Node(value)
    print(value, "left child")
    root.left = binaryTree()
    print(value, "right child")
    root.right = binaryTree()

    return root

def printTree(root, arr):
    if root is None:
        return
    printTree(root.left, arr)
    printTree(root.right, arr)
    arr.append(root.value)


def levelOrder(root, arr):
    q = deque()
    q.append(root)

    while q:
        size = len(q)
        while size:
            node = q.popleft()
            arr.append(node.value)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
            size -= 1

    return arr
    

root = binaryTree()
arr = []
# printTree(root, arr)
levelOrder(root, arr)

for val in arr:
    print(val)
