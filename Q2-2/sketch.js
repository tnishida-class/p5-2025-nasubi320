// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();//枠線を消す→まるとか四角に黒枠つく
  for (let i = 0; i < 8; i++) {　　//N回繰り返すは for(let i = 0; i < N; i++){...}
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(255, 255, 255); // 白
      } else {
        fill(105, 105, 105); // グレー
      } rect(size * i, size * j, size, size);

      // 条件に応じて色を赤に変更
      if ((i + j) % 2 != 0 && size * j < 75) {
        fill(255, 0, 0); // 赤
        ellipse(size * i + size / 2, size * j + size / 2, size - 5, size - 5);　//ｘ：(ますの左上の座標＋一辺の長さ)÷２　横の辺の真ん中
      }
      if ((i + j) % 2 != 0 && 100 < size * j) {
        fill(0, 0, 0);
        ellipse(size * i + size / 2, size * j + size / 2, size - 5, size - 5);
      }

    }
  }
}












