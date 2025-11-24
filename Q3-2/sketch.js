// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;
const vyMax = 20;

//　⇧　変数・定数

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;       //初期　止まっている
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);　//ウィンドウのサイズを変えても対応可
}
//繰り返し
function draw() {
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);


  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);

  //左右の動き
  if (keyIsDown(LEFT_ARROW)) { x -= 5; }　　// BLANK[1] キャラクターの左右移動
  if (keyIsDown(RIGHT_ARROW)) { x += 5; }
  if (keyIsDown(RIGHT_ARROW) && keyIsDown("B".charCodeAt(0))) { x += 10; }　//ブースト
  if (keyIsDown(LEFT_ARROW) && keyIsDown("B".charCodeAt(0))) { x -= 10; }
  // BLANK[2] 重力とジャンプ　要件３はテキストの「重力     、床に弾む」の応用になります。 地面で跳ね返る代わりにキー操作でジャンプ（vx を大きめの負の値にする）するようにしてください。 そのままだと空中でもジャンプできてしまうので、地面にいるときだけジャンプできるように if 文を追加しましょう。


  // 速くなりすぎないように制限
 
  

  //vx = constrain(vx, -20, 20);？
  vy = constrain(vy, -vyMax, vyMax); 

  // 位置を更新  
  y += vy;　//ｙ座標の位置の変化　ｖｙ分増える
  vy += g;　　//重力　加速
  //最初から下にいるように見える
//　ジャンプしたとき→vy-20にｇがかかっていく→になればさがっていく

  // 地面にいるときだけジャンプできる  
  if (y >= groundY - size / 2) {
    y = groundY - size / 2;
    vy = 0;
    if (keyIsDown(" ".charCodeAt(0))) { vy = -20; }
  }



  //端っこ制限
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

}
//地面についたら飛ぶ→groundY以下いかない→どうやって
//速さは位置の変化量