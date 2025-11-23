

function setup(){
  createCanvas(200, 200);
  background(192);
  noStroke();
   

  flower(random(10, 50), random(10, 50), random(10, 50)); 
   flower(random(10, 50), random(10, 50), random(10, 50)); 
    flower(random(10, 50), random(10, 50), random(10, 50)); 
     flower(random(10, 50), random(10, 50), random(10, 50)); 
}

function flower(cx, cy, r){
  // ---- 花びら4つ ----
  ellipse(cx + r, cy, r * 2); // 右
  ellipse(cx - r, cy, r * 2); // 左
  ellipse(cx, cy - r, r * 2); // 上
  ellipse(cx, cy + r, r * 2); // 下

  
}
