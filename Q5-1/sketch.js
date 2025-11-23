// EUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,32,255);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;　//２π＝360度
    const x = 100 + cos(theta) * 50;　//ｙ＝sinθ×ｒ
    const y = 100 + sin(theta) * 50;
    star(x, y, 10);
  }
}
 
 function star(cx, cy, r){ 
  fill(255,224,32)
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;　//真上90度
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
//円周率とサイン・コサインがなぞ
//全体的に意味わからん