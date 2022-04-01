const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
const [N, A, M, B] = input.map((x) => x.split(" ").map(Number));
A.sort((a, b) => a - b);
let result = [];

// 배열의 index값을 반으로 계속 줄여가면서 풀이해야한다.
// 풀이
function solution() {
  B.forEach((e) => {
    let start = 0; // index
    let end = A.length - 1;
    let res = false;
    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      console.log(mid + "mid");
      if (e < A[mid]) {
        end = mid - 1;
      } else if (e > A[mid]) {
        start = mid + 1;
      } else {
        res = true;
        break;
      }
    }

    if (res === true) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  return result;
}

console.log(solution());
