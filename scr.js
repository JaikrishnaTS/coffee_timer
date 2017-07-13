var interval = null;
var currentIncrement = 0;
var initialised = false;
var coffee = 0, water = 0, tt = 0, curgram = 0, bloom = 30, drip = 30;

function ppclick() {
  if (!initialised) {
    reset();
    initialised = true;
    $(".playpause span").removeClass();
    $(".playpause span").addClass("pause");
    initialiseTimer();
  } else {
    reset();
  }
}


function initialiseTimer() {
  interval = setInterval(function() {
    var current = setCurrentIncrement();
    updateStopwatch(current);
  }, 1000);
  coffee = $("#coffee").val();
  water = $("#water").val();
  tt = parseInt($("#minutes").val()*60) + parseInt($("#seconds").val());
  $(".wat").hide();
  $(".desc").text("Blooming").show();
  curgram = coffee*2;
  $("#coffee").val(curgram);
  grainc = (water - curgram)/(tt - bloom - drip);
  console.log(grainc);
}

function updateStopwatch(increment) {
  if(increment == bloom)
    $(".desc").text("Add water");
  if(increment == tt - drip)
    $(".desc").text("Dripping");
  if(increment >= tt) {
    clearInterval(interval);
    initialized = false;
    $(".desc").text("Done!");
  }
  if(increment > bloom && increment <= tt - drip) {
    curgram += grainc;
    $("#coffee").val(parseInt(curgram));
  }
  var minutes = Math.floor(increment / 60);
  var seconds = increment - (minutes * 60);
  if(minutes > 99)
    reset();

  $("#minutes").val(minutes < 10 ? ("0" + minutes.toString()) : minutes.toString());
  $("#seconds").val(seconds < 10 ? ("0" + seconds.toString()) : seconds.toString());
  
}

function setCurrentIncrement() {
  currentIncrement += 1;
  return currentIncrement;
}

function reset() {
  clearInterval(interval);
  currentIncrement = 0;
  $("#coffee").val("22");
  $("#minutes").val("02");
  $("#seconds").val("00");
  $("#water").val("210");
  $(".playpause span").removeClass();
  $(".playpause span").addClass("play");
  //$(".playpause").click(ppclick);
  $(".desc").text("Start").hide();
  $(".wat").show();
  initialised = false;
}
