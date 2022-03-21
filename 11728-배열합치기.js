const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
// merge sort 이용
// 배열은 총 2개이다. 각 배열의 첫번째 요소를 비교해서 작은 요소를 새로운 배열에 넣는다.
// 그 다음 요소끼리 계속 반복해서 비교 한 후 작은 요소를 새로운 배열에 추가한다.
// 비교를 다했으면 남은 배열의 요소들을 모두 새로운 배열에 추가한다.
// 풀이
function solution(input) {
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);
  let result = new Array(A.length + B.length);
  let tempA = 0;
  let tempB = 0;
  let tempResult = 0;

  let remainA = false;
  let remainB = false;

  while (tempA < A.length || tempB < B.length) {
    if (A[tempA] === undefined || B[tempB] === undefined) {
      if (A[tempA] === undefined) {
        remainB = true;
      } else if (B[tempB] === undefined) {
        remainA = true;
      }
      break;
    }

    if (A[tempA] > B[tempB]) {
      result[tempResult++] = B[tempB++];
    } else {
      result[tempResult++] = A[tempA++];
    }
  }

  if (remainA) {
    while (tempA < A.length) {
      result[tempResult++] = A[tempA++];
    }
  } else if (remainB) {
    while (tempB < B.length) {
      result[tempResult++] = B[tempB++];
    }
  }

  return result.join(" ");
}

console.log(solution(input));
