// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      console.log(i,j);
      stroke(0,0,255);
      rect (i * 20, j * 20, 20, 20);
    }
  }
}
