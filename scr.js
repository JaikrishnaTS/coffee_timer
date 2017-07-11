window.onload = function() {
  var status = document.getElementById('status'),
  tim = document.getElementById('time'),
  gram = document.getElementById('grams'),
  start = document.getElementById('start'),
  clear = document.getElementById('clear'),
  bloom = 30,
  drip = 30,
  grams = 0,
  seconds = 0,
  minutes = 0,
  hours = 0,
  secs = 0,
  grainc, tt, t = 0,
  cof, wat, tm, ts;
}

function add() {
  secs++;
  if (secs > bloom && secs <= (tt - drip))
    grams += grainc;
  if (secs == 1)
    status.textContent = "Wait for Blooming";
  if (secs == bloom)
    status.textContent = "Add water";
  if (secs == tt - drip)
    status.textContent = "Wait for Dripping";
  if (++seconds >= 60) {
    seconds = 0;
    if (++minutes >= 60)
      minutes = 0;
  }
  tim.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
  gram.textContent = parseInt(grams);

  if (secs < tt)
    timer();
  else
    status.textContent = "Done!";
}

function timer() {
  t = setTimeout(add, 1000);
}
//timer();

function startmes() {
  t ? clearTimeout(t) : 0;
  initvars();
  cof = parseInt(document.getElementById('coffee').value);
  wat = parseInt(document.getElementById('water').value);
  tm = parseInt(document.getElementById('totalmin').value);
  ts = parseInt(document.getElementById('totalsec').value);
  grams = (cof * 2);
  tt = (tm * 60) + ts;
  grainc = (wat - grams) / (tt - bloom - drip);
  console.log(grainc);
  timer();
}

/* Start button */
start.onclick = startmes;

function initvars() {
  status.textContent = "Starting"
  tim.textContent = "00:00";
  gram.textContent = "0";
  seconds = 0;
  minutes = 0;
  grams = 0;
  secs = 0;
}
/* Clear button */
clear.onclick = function() {
  clearTimeout(t);
  initvars();
}

