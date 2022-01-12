const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

solution(input);

function solution(input) {
  input.shift();
  let temp = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    temp.push(input[i][0]);
    for (let j = 1; j < input[i].length; j++) {
      if (input[i][j] !== input[i][j - 1]) {
        temp.push(input[i][j]);
      }
    }

    if ([...new Set(input[i].split(""))].length === temp.length) {
      count++;
    }
    temp = [];
  }
  console.log(count);
}
