// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数　画像が更新される回数　定数
let count = 0; // 何フレーム目か　変数
let size = 50;
// ⇧関数の外で変数を宣言すればプログラム全体で有効となるのでどの関数からも共通の変数を使うことができる

function setup() {
  createCanvas(200, 200);
  count = 0;
}

function draw() {
  background(160, 192, 255);

  let speed = 1; // アニメーションの速さ
  // BLANK[2]
  count = (count + speed) % cycle; 
  if (keyIsPressed) {
    count = (count + speed+1) % cycle;
  }
  if (count < cycle / 2) {
    size += 1;
  } else {
    size -= 1;
  }

  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  ellipse(width / 2, height / 2, size);
}







