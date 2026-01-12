import heapq
class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        
        def findParent(u):
            if u == parent[u]:
                return u

            parent[u] = findParent(parent[u])
            return parent[u]

        def findUnion(u, v):

            pv = findParent(v)
            pu = findParent(u)

            if (rank[pv] < rank[pu]):
                parent[pv] = pu

            elif (rank[pu] < rank[pv]):
                parent[pu] = pv

            else:
                parent[pv] = pu
                rank[pu] += 1

        n = len(edges) + 1
        parent = []
        ans = []
        for i in range(n):
            parent.append(i)

        rank = [0] * n

        q = []

        for u, v in edges:

            if (findParent(u) != findParent(v)):

                findUnion(u, v)
            else:
                ans.append((u, v))

        return ans.pop()