const fs = require("fs");
// TODO: 제출 시 절대경로로 변환 필수 ('/dev/stdin')
const input = fs.readFileSync("test.txt").toString().split("\n"); // 배열
solution();
// 풀이
function solution() {
  let newArr = [];
  let num = 1;
  let init = 2;

  while (num < 10000) {
    if (String(num).length > 1) {
      let splitArr = String(num).split("");
      let sum = splitArr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
      num += sum;
    } else {
      num += num;
    }
    newArr.push(num);
    num = init++;
  }

  for (let i = 1; i < newArr.length; i++) {
    if (newArr.indexOf(i) === -1) {
      console.log(i);
    }
  }
}
