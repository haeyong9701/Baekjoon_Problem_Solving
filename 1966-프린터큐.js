const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
const newArr = [];

let count = 0;

// 풀이
function solution() {
  const [k, ...numbers] = input;
  for (let i = 0; i < numbers.length; i = i + 2) {
    let [papers, choice] = numbers[i].split(" ");
    let priority = numbers[i + 1].split(" ").map(Number);

    console.log(priority);
    for (let j = 0; j < papers; j++) {}
  }
  return numbers;
}

console.log(solution());
