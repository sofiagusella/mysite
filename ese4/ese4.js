function al_click() {
  if($("#q3").hasClass("sinistra"))
  rotazione();
  else if($("#q3").hasClass("destra"))
    inverti();
}

function inverti() {
  $("#q1").removeClass("sinistra")
  $("#q1").addClass("destra")
  $("#q3").removeClass("destra")
  $("#q3").addClass("sinistra")
}

function rotazione() {
  $(".box").addClass("rotate-orario")
}
function stop() {
  $(".box").removeClass("rotate-orario")
}

$("#q1").click(al_click);
$("#q2").hover(stop);
$("#q3").hover(stop);
$("#q4").hover(stop);
