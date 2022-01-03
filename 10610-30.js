const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().split("\n");
solution(input);

function solution(input) {
  const sum = input[0]
    .split("")
    .sort((a, b) => a - b)
    .reverse();
  if (sum[sum.length - 1] !== "0") {
    console.log(-1);
    return;
  }
  const result = sum.reduce((a, b) => Number(a) + Number(b));
  if (result % 3 === 0) {
    console.log(sum.join(""));
  } else {
    console.log(-1);
  }
}

// 1. 각자리수를 모두 더했을 때 3의 배수여야함.
// 2. 30의 배수이니 맨뒤에 0이 있어함.
// 입력이 10의 5승이였는데 큰 수를 출력할 때는 문자열로 출력해줘야 한다.
