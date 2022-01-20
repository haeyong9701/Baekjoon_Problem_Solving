const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
const n = Number(input[0]);

// 풀이

// - 클래스형을 이용해서 직접 큐를 구현해야 했다. shift 메서드를 사용하게 되면 원소를 앞에서부터 제거하게 되고, 값이 제거되도 공간은 남아있기 때문에 배열의 모든 요소들이 다시 재정렬을 하게 된다. 이렇게 되면 시간 복잡도가 O(n) 이 되어버려서 시간초과가 떠버린다.

// - 직접 구현한 추가 및 삭제 알고리즘의 시간 복잡도는 O(1) 이 된다.

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }

  dequeue() {
    if (this.size() === 0) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}

function solution(n) {
  const queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.size() > 1) {
    queue.dequeue();
    const temp = queue.dequeue();
    queue.enqueue(temp);
  }
  return queue.storage[queue.front];
}

console.log(solution(n));
