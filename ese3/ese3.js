function al_click(){
  if ($("#cerchio").hasClass("faigirare"))
   usciresecondo();
  else if ($("#cerchio").hasClass("trasformac"))
    gira();
  else if($("#cerchio").hasClass("center"))
  diventaquadrato();
  else if ($("#quadrato").hasClass("center"))
  uscire();
}

function usciresecondo(){
   $("#quadrato").addClass("faientrare");
   $("#cerchio").addClass("faiusciresecondo");
   $("#quadrato").removeClass("fuori");
   $("#quadrato").addClass("center");
  $("#cerchio").addClass("fuori");
   $("#cerchio").removeClass("center");
}

function gira(){
  $("#cerchio").addClass("faigirare");
}
function uscire(){
   $("#quadrato").addClass("faiuscire");
  $("#cerchio").addClass("faientrare");
  $("#quadrato").removeClass("center");
  $("#quadrato").addClass("fuori");
  $("#cerchio").removeClass("fuori");
  $("#cerchio").addClass("center");
}

function diventaquadrato() {
  $("#cerchio").addClass("trasformac");
  $("#cerchio").removeClass("cprima");
}
$("#quadrato").click(al_click);
$("#cerchio").click(al_click);
