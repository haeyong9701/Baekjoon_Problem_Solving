const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

solution(input);

function solution(input) {
  const result = input[0].split("").sort((a, b) => b - a);
  console.log(result.join(""));
}
