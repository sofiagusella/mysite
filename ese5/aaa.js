function ruota_quadrato_rosso() {
  $("#quadrato").addClass("rotate");
}

function disegna_quadrato_giallo() {
  $("#quadratino").addClass("qino-on");
}

function ruota_tutto() {
  $("#quadrato").addClass("rotate-orario");
  $("#quadratino").addClass("rotate-antiorario");
}

function al_click() {
  if($("#quadratino").hasClass("qino-on"))
    ruota_tutto();
  else if($("#quadrato").hasClass("rotate"))
    disegna_quadrato_giallo();
  else
    ruota_quadrato_rosso();
}

$("#quadrato").click(al_click);
