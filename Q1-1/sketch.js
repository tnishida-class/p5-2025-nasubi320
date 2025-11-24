function setup(){
  createCanvas(200, 200);
  background(192);

  noStroke();
  flower(100, 100, 50,); // 点つなぎだけど線なしもOK
}

function flower(cx, cy, r,){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 8; i++){
    const theta = TWO_PI * i / 8 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}