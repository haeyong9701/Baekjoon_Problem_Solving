const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
// const input = fs.readFileSync("test.txt").toString().split("\n");
const input = require("fs").readFileSync("test.txt", "utf8");

solution(input);

function solution(input) {
  let [firstLine, ...data] = input
    .trim()
    .split("\n")
    .map((v) => Number(v));

  const result = data.sort((a, b) => a - b);

  console.log(result.join("\n"));
}
