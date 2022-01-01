const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().split("\n");
solution(input);

function solution(input) {
  let queue = [];
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    let first = input[i].split(" ")[0];
    let second = input[i].split(" ")[1];

    if (first === "push") {
      queue.push(second);
    } else if (first === "front") {
      if (queue.length === 0) {
        answer.push(-1);
      } else {
        answer.push(queue[0]);
      }
    } else if (first === "back") {
      if (queue.length === 0) {
        answer.push(-1);
      } else {
        answer.push(queue[queue.length - 1]);
      }
    } else if (first === "size") {
      answer.push(queue.length);
    } else if (first === "empty") {
      if (queue.length > 0) {
        answer.push(0);
      } else {
        answer.push(1);
      }
    } else if (first === "pop") {
      if (queue.length === 0) {
        answer.push(-1);
      } else {
        answer.push(queue.shift());
      }
    }
  }

  console.log(answer.join("\n"));
}
