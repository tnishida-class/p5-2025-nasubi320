// 吹き出し
function setup(){
  createCanvas(400, 400);
  textSize(16);}

  function draw(){
  background(220);
  balloon("関数は難しい？", 100, 100);
  balloon("関数は便利？", mouseX, mouseY);
}
function balloon(t, x, y){　//吹き出し全体の左上
  const w = textWidth(t); // テキストの幅
  const h = textAscent() + textDescent(); // テキストの高さ
  const p = 4; // 余白の大きさ (padding)
　
  const ew = w+p*2;
  const eh = h+p*2;  //これ以上よはくでかくしても右に増えるだけ、最小

  const ex= x+ew/2
  const ey= y+eh/2

  push();
  fill(192)
  noStroke();
  ellipse(ex,ey,ew+10,eh+10) //円の中心  大きさどうする
  // BLANK[1] 吹き出しの背景を先に描く　楕円

  fill(192);
  beginShape();
  vertex(ex+ew/10 ,ey);     
  vertex(ex-ew/10, ey);     
  vertex(ex , ey+eh); // 下に伸びる点（先端） 長さは適当
  endShape(CLOSE);
  // BLANK[2] 吹き出しの三角形を描く　verst
  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  fill(255);
  text(t, x + p, y + h / 2 + p);　　//文字の座標
  
  pop();
}
//バルーンとは　引数　





