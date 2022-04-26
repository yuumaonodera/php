console.log("HELLO WORLD");
let message = "HELLO WORLD";
console.log(message);
message = "Good night world";
console.log(message);
let n;
console.log(n);
console.log(typeof 20);
console.log(typeof "str");
console.log(typeof true);
console.log(typeof undefined);
const bool = true;
console.log(typeof bool);
const ytr = String(bool);
console.log(typeof ytr);

const str = "123";
console.log(typeof str);
const num = Number(str);
console.log(typeof num);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));

let say = "Hello";
console.log(say);
say = "goodbye";
console.log(say);

const add = 6 + 2;
console.log(add);
const sub = 6 - 2;
console.log(sub);
const mul = 6 * 2;
console.log(mul);
const div = 6 / 2;
console.log(div);

const quanitity = 400;
const banana = (quanitity <= 300) ? "少ない" : "多い";
console.log(banana);

const price = 1000;
const tax = 0.1;
console.log(price * tax);

const scoreA = 80 + 90 + 60 + 85 + 100;
const scoreB = 40 + 30 + 50 + 25 + 60;

console.log(scoreA);
console.log(scoreB);

if (scoreA >= 300 && scoreB >= 300) {
  console.log("素晴らしい");
} else if (scoreA >= 300 || scoreB >= 300) {
  console.log("普通")
} else if (scoreA < 300 && scoreB < 300) {
  console.log("がんばろう")
}

const result = "大吉"

switch (result) {
  case "大凶":
    console.log("大凶です");
    break;
  case "凶":
    console.log("凶です");
    break;
  case "末吉":
    console.log("末吉です");
    break;
  case "吉":
    console.log("吉です");
    break;
  case "小吉":
    console.log("小吉です");
    break;
  case "中吉":
    console.log("中吉です");
    break;
  case "大吉":
    console.log("大吉です");
    break;
}

const dvi = 1800;

const number = (dvi < 1000) ? "安い" : (dvi > 2000) ? "高い" : "ちょうどいい";
console.log(number);

const array = ["太郎", "次郎", "三郎", "四郎", "五郎"];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numb = numbers.map(function (item) {
  if (item % 2 == 0) {
    return item * 2;
  }
  return item;
});

console.log(numb);

function vegetable(name, price, func) {
  const pit = func(price);
  console.log(name + 'の税込価格は' + pit + 'です');
}

const priceInclubingTax = function (price) {
  const tax = 1.1;
  return Math.floor(price * tax);
}
vegetable('苺', 200, priceInclubingTax);

const globalConst = 'globalConst';
let globalLet = 'globalLet';

function dummyFunc() {
  const localConst = 'localConst';
  let localLet = 'localLet';
}
dummyFunc();
console.log(globalConst);
console.log(globalLet);

globalLet = 'updateGlobalLet';
console.log(globalLet);

console.log(globalConst);
console.log(globalLet);

const items = [
  {
    name: "水",
    price: 100,
  },
  {
    name: "りんごジュース",
    price: 130,
  },
  {
    name: "コーヒー",
    price: 150,
  },
  {
    name: "モンスター",
    price: 200,
  },
  {
    name: "モンスター（大）",
    price: 250,
  },
];

const buy = function (pay, itemName) {
  const findItem = item.find((i) => i.name == itemName);
  if (!findItem) return console.log("その商品は存在しません");
  if (pay < findItem.price) return console.log("お金が足りません");
  const change = pay - findItem.price;
  console.log(findItem.name + "をお買い上げありがとうございます");
  if (change <= 0) {
    return console.log("お釣りはありません。");
  }
  console.log("お釣りは" + change + "円になります");
}

function advice(name, test) {
  if (test >= 70 && test <= 100) {
    return `${name}君良くできました`;
  } else if (test >= 30 && test < 70) {
    return `${name}君普通です`;
  } else if (test >= 0 && test < 30) {
    return `${name}君少し頑張りましょう`;
  } else {
    return `正しい数字を入力してください`;
  }
}
console.log(advice("A", 80));
console.log(advice("B", 15));
console.log(advice("C", 50));

const test = ["国語", "数学", "英語"];
test.push("理科", "社会");
console.log(test);

const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "Laravel"],
  createSentense() {
    let data;
    this.skills.forEach((skils, index) => {
      if (index == 0) {
        data = skils;
      } else {
        data = `${data}と${skils}`;
      }
    });
    return `${this.name}は${this.month}ヶ月で${data}を学ぶことができます`
  },
};
window.addEventListener('load', function () {
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    alert("クリックされました");
  });
});
