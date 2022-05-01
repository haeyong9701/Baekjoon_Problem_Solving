const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
const [n, ...testcases] = input;

// 풀이
function solution(n, testcases) {
  for (let i = 0; i < n; i++) {
    let count = 1;
    let M = Number(testcases[i * 2].split(" ")[1]);
    const queue = testcases[i * 2 + 1].split(" ").map((i) => Number(i));

    while (1) {
      const shiftItem = queue.shift();

      if (Math.max(...queue) <= shiftItem && M === 0) {
        console.log(count);
        break;
      } else if (Math.max(...queue) > shiftItem && M === 0) {
        queue.push(shiftItem);
        M = queue.length - 1;
      } else if (Math.max(...queue) > shiftItem) {
        queue.push(shiftItem);
        M -= 1;
      } else if (Math.max(...queue) <= shiftItem) {
        count++;
        M -= 1;
      }
    }
  }
}

solution(n, testcases);
