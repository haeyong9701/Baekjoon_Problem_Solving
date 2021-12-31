const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().split("\n");
solution(input);
// 풀이
function solution(input) {
  let newArr = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    let first = input[i].split(" ")[0];
    let second = input[i].split(" ")[1];

    if (typeof first === "string") {
      if (first === "push") {
        newArr.push(Number(second));
      } else if (first === "top") {
        if (newArr.length) {
          answer += newArr[newArr.length - 1] + "\n";
        } else {
          answer += "-1\n";
        }
      } else if (first === "size") {
        answer += newArr.length + "\n";
      } else if (first === "empty") {
        if (newArr.length > 0) {
          answer += "0\n";
        } else {
          answer += "1\n";
        }
      } else if (first === "pop") {
        let popNum = newArr.pop();
        if (popNum === undefined) {
          answer += "-1\n";
        } else {
          answer += popNum + "\n";
        }
      }
    }
  }
  console.log(answer);
}
// 각각의 경우마다 console.log를 찍게 되면 시간초과 오류가 뜨게 된다.
// answer 변수에 담아주어 for문이 끝난 후 console.log를 출력해주었다.
