// カレンダーを描画しよう
function setup(){
  createCanvas(200, 200);
  drawCalendar(2025, 10);
}

function drawCalendar(y, m){
  for(let i = 0; i < 7; i++){
    const x = i * width / 7;
    const y = 20;
    stroke(255);
    text(dayOfWeekAsString(i), x, y);
    line()
  }

  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  if(y%4==0){d=366}
  else{d=365}
  // BLANK[1] hint: 閏年なら366日、そうでなければ365日
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  if(count-d%7==0){dow="日"}
  if(count-d%7==1){dow="月"}
  if(count-d%7==2){dow="火"}
  if(count-d%7==3){dow="水"}
  if(count-d%7==4){dow="木"}
  if(count-d%7==5){dow="金"}
  if(count-d%7==6){dow="土"}

  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}
