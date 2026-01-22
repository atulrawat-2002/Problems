def DFS(node, graph, ans, path, n):

    path.append(node)

    if node == n-1:
        ans.append(path[:])
        path.pop()
        return

    for nei in graph[node]:
        DFS(nei, graph, ans, path, n)
                

    path.pop()
    return 

class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        
        ans = []
        path = []
        n = len(graph)

        DFS(0, graph, ans, path, n)

        return ans