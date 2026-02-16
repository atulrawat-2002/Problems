class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:

        indeces = {val: i for i, val in enumerate(inorder)}
        

        def tree(index, start, end):
            # nonlocal index
            if start > end or index < 0:
                return None

            value = postorder[index]
            position = indeces[value]

            node = TreeNode(value)

            node.left = tree( index - (end - position) - 1, start, position - 1 )
            node.right = tree( index - 1, position + 1, end )

            return node

        return tree(len(inorder) - 1, 0, len(inorder) - 1)