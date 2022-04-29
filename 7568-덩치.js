const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
// 정리
let count = 0;

// 덩치 큰 사람 있으면 count++;

// 풀이
function solution() {
  const [n, ...person] = input;
  let count = [];

  for (let i = 0; i < n; i++) {
    let rank = 1;
    for (let j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      const [aWeight, aTall] = person[i].split(" ");
      const [bWeight, bTall] = person[j].split(" ");

      if (Number(aWeight) < Number(bWeight) && Number(aTall) < Number(bTall)) {
        rank += 1;
      }
    }
    count.push(rank);
  }
  return count.join(" ");
}

console.log(solution());
