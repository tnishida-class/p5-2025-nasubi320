// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(270, 180);
  noStroke();
  background(255); //白色
  
  const d = height / 9; // 縞1本の太さ,縞の数＝計9本
  for(let i = 0; i < 9; i++)
　{
  　const blue = color(0, 51, 160);　//青い色　見やすく

  // 縞を描く
 
    // BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
    if (i % 2 == 0) {
      fill(blue);
    } 
    rect(0, i * d, width, d);　
    
  　
  // 十字を描く
  const size = d * 5;
  fill(blue);
  rect(0, 0, size, size);　//ここまで後ろの四角
  fill(255);　//白色
  rect(d * 2, 0, d, size);　　//縦縞
  // BLANK[2] 十字を完成させよう
  fill(255);
  rect(0,d*2,size,d)
 
 }
}