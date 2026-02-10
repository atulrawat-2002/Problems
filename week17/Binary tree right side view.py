from collections import deque
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        
        ans = []
        q = deque()

        q.append(root)

        if not root:
            return ans

        while q:
            size = len(q)
            last = None

            while size:
                node = q.popleft()
                last = node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                size -= 1
            ans.append(last)

        return ans