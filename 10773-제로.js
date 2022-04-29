const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
let newArr = [];

// 풀이
function solution() {
  const [k, ...numbers] = input;

  for (let i = 0; i < k; i++) {
    if (Number(numbers[i]) === 0) {
      newArr.pop();
    } else {
      newArr.push(numbers[i]);
    }
  }
  return newArr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
}

console.log(solution());
