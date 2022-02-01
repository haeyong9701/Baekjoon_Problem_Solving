const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 정리
const NMV = input.shift().split(" ");
const N = Number(NMV.shift());
const M = Number(NMV.shift());
const V = Number(NMV.shift());

let graph = new Array(N + 1).fill(0);
let visited = new Array(N + 1).fill(false);

// console.log(graph);
for (let i = 0; i <= N + 1; i++) {
  graph[i] = new Array(N + 1).fill(0);
}
// console.log(graph);
for (let tmp of input) {
  tmp = tmp.split(" ");
  graph[Number(tmp[0])][Number(tmp[1])] = 1;
  graph[Number(tmp[1])][Number(tmp[0])] = 1;
}

// console.log(graph);

// 풀이
const connectedVertices = (graph, vertex, visited) => {
  const dfsArr = [];
  const bfsArr = [];

  // dfs solution
  const dfs = (graph, vertex, visited) => {
    // 해당 버텍스에 방문했다는 표시로 visited key에 vertex를 담고 값에 true를 할당합니다.
    visited[vertex] = true;
    dfsArr.push(vertex);
    // console.log(visited);
    // console.log(graph);

    // 해당 버텍스의 모든 간선들을 전부 순회합니다.
    for (let next = 1; next <= N; next++) {
      // 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
      if (!visited[next] && graph[vertex][next]) {
        // dfs를 호출해(재귀) 방문합니다.
        dfs(graph, next, visited);
      }
    }
  };

  // bfs solution
  const bfs = (graph, vertex, visited) => {
    // bfs는 가장 가까운 정점부터 탐색하기 때문에 queue를 사용합니다.
    // queue에 vertex를 담습니다.
    const queue = [vertex];
    // 해당 버텍스를 방문했기 때문에 visited에 담아 주고, 방문했다는 표시인 true를 할당합니다.
    visited[vertex] = true;

    // queue의 길이가 0일 때까지 순환합니다.
    while (queue.length > 0) {
      // cur 변수에 정점을 할당합니다.
      // queue는 선입선출이기 때문에 shift 메소드를 사용하여 버텍스를 가져옵니다.
      const cur = queue.shift();
      bfsArr.push(cur);

      // 그래프의 cur 정점에 있는 간선들을 전부 순회합니다.
      for (let next = 1; next <= graph[cur].length; next++) {
        // 만약, 해당 버텍스를 방문하지 않았다면 queue에 삽입합니다.
        // 방문했다는 표시로 visited에 해당 버텍스를 삽입하고 true를 할당합니다.
        if (!visited[next] && graph[cur][next]) {
          queue.push(next);
          visited[next] = true;
        }

        // queue에 다음으로 방문할 버텍스가 있기 때문에 while은 멈추지 않습니다.
        // 만약, queue가 비어 있다면 더 이상 갈 곳이 없는 것이기 때문에 bfs 함수를 종료
      }
    }
  };

  dfs(graph, vertex, visited);
  // 초기화
  visited = new Array(N + 1).fill(false);
  bfs(graph, vertex, visited);

  return [dfsArr.join(" "), bfsArr.join(" ")].join("\n");
};

console.log(connectedVertices(graph, V, visited));
