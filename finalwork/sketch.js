let text1 = "神戸大学大学院国際文化学研究科";
let letters = [];
let fontSize = 30;

let text2 = "GraduateSchoolofInterculturalStudies,KobeUniversity";
let letters2 = [];
let fontSize2 = 10;
let Rwidth = 0;
let angle =0;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);　//ウィンドウのサイズを変えても対応可
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // 各文字の初期位置と落下開始時間
  for (let i = 0; i < text1.length; i++) {
    let start = width / 16;
    let plus = i * fontSize
    const c = {
      cha: text1[i], //文字そのもの
      x: start + plus,
      y: -40, // 画面外の上からスタート
      targetY: height / 2,   //落ちてくる位置
      delay: i * 10, // 何フレーム後に動き出すか
      speed: 3,
      arrived: false
    }; letters.push(c);　//　文字に情報を追加、その文字を配列に追加

  }


  //英単語のしょきいちと動き出し
  for (let i = 0; i < text2.length; i++) {
    let start2 = width / 16;
    let plus2 = i * fontSize2
    const c2 = {
      cha: text2[i], //文字そのもの
      x: start2 + plus2,
      y: height / 2 + fontSize, // 
      delay: i * 5 + 20, // 何フレーム後に動き出すか
      speed: 10,

    }; letters2.push(c2);　//　文字に情報を追加、その文字を配列に追加

  }

}

function flower(cx, cy, r,angle) {

  push();               // 座標系を保存
    // 花の中心を原点に移動
  rotate(angle);
  
  for(let i = 0; i < 4; i++){
    const theta = TWO_PI * i /4 
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;

  ellipse(cx + r, cy, r * 2);
  ellipse(cx, cy - r, r * 2);
  ellipse(cx - r, cy, r *2 );
  ellipse(cx, cy + r, r * 2);
}
 pop(); 



}



//描画

function draw() {
  background(255);
　
  noStroke();
  angle += 0.05;
  fill(0, 0, 255);
  flower(80, windowHeight / 2 - fontSize - 300, 30);
  fill(0, 0, 139);
  flower(150, windowHeight / 2 - fontSize - 200, 10);
  fill(148, 0, 211);
  flower(windowWidth - 100, windowHeight / 2 + fontSize + 300, 20);
  fill(138, 43, 226);
  flower(windowWidth - 50, windowHeight / 2 + fontSize + 200, 15);
  fill(139, 0, 139);
  flower(windowWidth - 200, windowHeight / 2 + fontSize + 150, 30);
   



  noStroke();
  fill(220, 230, 255);
  rect(0, windowHeight / 2 - fontSize * 2, Rwidth, fontSize * 4)
  Rwidth += 2;

  // 日本語
  for (let i = 0; i < letters.length; i++) {

    let l = letters[i];
    // 時間が来たら落下開始
    if (frameCount > l.delay) {　//ある時間(フレーム、delay)を過ぎたら
      if (!l.arrived) {
        l.y += l.speed;
        if (l.y >= l.targetY) {
          l.y = l.targetY;
          l.arrived = true;
        }
      }
    }




    textSize(fontSize);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    fill(25, 25, 112);
    text(l.cha, l.x, l.y);
  }

  //英単語
  for (let i = 0; i < letters2.length; i++) {
    let l2 = letters2[i];


    if (frameCount > l2.delay) {　//ある時間(フレーム、delay)を過ぎたら
      fill(0);
    }
    else { fill(255); }
    textSize(fontSize2);
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    noStroke();
    text(l2.cha, l2.x, l2.y)




  }


}





























































