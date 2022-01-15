const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
const t = Number(input[0]);
const arr = input.slice(1);

// 풀이

// 스택 // 빈배열에 하나씩 push
// 배열 마지막 요소가 ")"이면 pop 2번
// 배열의 길이가 0이면 알맞는 괄호이므로 YES, 나머지는 NO

function solution(t, arr) {
  let result = [];
  const resultString = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
      if (result[result.length - 2] === "(" && result[result.length - 1] === ")") {
        result.pop();
        result.pop();
      }
    }

    if (result.length === 0) {
      resultString.push("YES");
    } else {
      resultString.push("NO");
    }
    result = [];
  }

  return resultString.join("\n");
}

console.log(solution(t, arr));
