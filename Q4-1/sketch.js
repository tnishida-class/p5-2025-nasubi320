// 配列の平均・最大・最小を求め、棒グラフを描く
function setup() {
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for (let i = 0; i < 10; i++) {
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];　//配列の値を足していく
  }
  const average = sum / scores.length;  //length　データ数
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）

  largest = 0;　//ありうる最小の値  初期値  20は？
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > largest) {　//I番目[今の値]がこれまでの最大値よりでかい＝I番目が最大
      largest = scores[i];
      // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
    }
  }

  let smallest = 100;　//ありうる最大の値
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < smallest) {
      smallest = scores[i];
    }
  }
  // BLANK[3]　ヒント：最小値とだいたい同じ}



  // ここから棒グラフを描いていきます。

  // まずは背景に横線をn本引く
  const n = 10;
  for (let i = 0; i < n; i++) { line(0, height * i / n, width, height * i / n); }
  //10回繰り返す
  noStroke();

  for (let i = 0; i < scores.length; i++) {
    const dx = width / scores.length;　//棒1本分の横幅を計算。画面幅 ÷ 棒の本数。
    const h = height * scores[i] / 100;
    // BLANK[4] 最大値・最小値の色を変えましょう


    if (scores[i] == largest) { fill(255, 0, 0); }
    else if (scores[i] == smallest) { fill(0, 0, 255); }
    else { fill(128); }
    rect(i * dx+2 , height - h, dx-4, h);　//すっきり
  }
  const ay = height - height * average / 100;
  stroke(0, 255, 0);
  line(0, ay, width, ay);
}


// BLANK[5] 平均点の線を引きます
