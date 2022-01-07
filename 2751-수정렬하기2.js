const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

solution(input);

function solution(input) {
  input.shift();
  const NumberArr = input.map((x) => Number(x));
  const result = NumberArr.sort((a, b) => a - b);
  console.log(result.join("\n"));
}
