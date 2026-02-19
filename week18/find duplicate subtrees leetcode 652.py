
class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        result = []
        occurence = {}

        def dfs(root):
            if not root:
                return "null"
            
            else:
                s = ""
                s += str(root.val)
                s += "," + str(dfs(root.left))
                s += "," + str(dfs(root.right))

            occurence[s] = occurence.get(s, 0) + 1

            if occurence[s] == 2:
                result.append(root)

            return s

        dfs(root)
        return result