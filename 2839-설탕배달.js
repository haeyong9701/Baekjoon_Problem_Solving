const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

// 정리
const N = Number(input[0]);

// 풀이
// 봉지는 3킬로 5킬로

const solution = (n) => {
  let count = 0;

  let fiveRemainder = n % 5;
  let threeRemainder = n % 3;

  // 5의 배수가 이득일 때
  if (n / 5 < n / 3 && fiveRemainder === 0) {
    return n / 5;
  }

  // 3의 배수가 이득일 때
  if (n / 5 > n / 3 && threeRemainder === 0) {
    return n / 3;
  }

  while (n > 0) {
    if (n % 3 === 0 && n < 15) {
      n = n - 3;
      count++;
    } else {
      n = n - 5;
      count++;
    }
  }

  if (n === 0) {
    return count;
  } else {
    return -1;
  }
};

console.log(solution(N));
