const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
const n = Number(input[0]);

// 풀이
function solution(n) {
  const dp = new Array(n + 1);
  dp[1] = 0;
  dp[2] = dp[1] + 1; // 2

  for (let i = 3; i <= n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
      dp[i] = dp[i - 1] + 1;
    } else if (i % 2 === 0 && i % 3 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1, dp[i / 3] + 1);
    } else if (i % 2 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
    } else if (i % 3 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
    }
  }
  // bottom-up 방식 사용해서 점화식 먼저 세우기
  // dp[3] = 0; // 2 = dp[2] + 1, 1 = dp[1] + 1
  // dp[4] = 0; // 3 = dp[3] + 1, 2 = dp[2] + 1
  // dp[n] = dp[n - 1] + 1, dp[n / 2 or 3] + 1

  console.log(dp[n]);
}

solution(n);
