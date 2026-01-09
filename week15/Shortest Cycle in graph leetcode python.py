    def findCycle(adj, src, dest):
            dist = [-1] * n
            dist[src] = 0
            q = queue.Queue()

            q.put(src)

            while not q.empty():
                node = q.get()

                for nei in adj[node]:

                    if (src == nei and dest == node) or (src == node and dest == nei):
                        continue

                    if dist[nei] == -1:
                        dist[nei] = dist[node] + 1
                        q.put(nei)

            return dist[dest] if dist[dest] != -1 else float('inf')


        adj = [[] for _ in range(n)]

        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        ans = float('inf')

        for u, v in edges:

            dist = findCycle(adj, u, v)
            if dist != float('inf'):
                ans = min(ans, dist + 1)





