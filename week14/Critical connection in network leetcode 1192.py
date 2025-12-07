class Solution:
    def criticalConnections(self, V: int, c: List[List[int]]) -> List[List[int]]:
        
        def dfs(node, parent, adj, disc, low, vis, count, ans):

            vis[node] = True
            disc[node] = low[node] = count[0]
            count[0] += 1

            for nei in adj[node]:

                if nei == parent:
                    continue

                elif vis[nei]:
                    low[node] = min(low[node], low[nei])

                elif not vis[nei]:
                    dfs(nei, node, adj, disc, low, vis, count, ans)
                    low[node] = min(low[node], low[nei])

                    if low[nei] > disc[node]:
                        ans.append([nei, node])

        adj = [[] for _ in range(V)]
        disc = [0] * V
        low = [0] * V
        vis = [False] * V
        ans = []
        count = [0]

        for u, v in c:
            adj[u].append(v)
            adj[v].append(u)


        for start in range(V):
            if not vis[start]:
                dfs(start, -1, adj, disc, low, vis, count, ans)

        return ans