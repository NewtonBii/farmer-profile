$("#button1").click(function(event) {
  event.preventDefault();
  $(".cotn_principal").slideDown(1000);
  $("#google-plus").show(100);
  $("#instagram").show(300);
  $("#linkedin").show(500);
  $("#twitter").show(700);
  $("#facebook").show(900);
});

$(".close").click(function(event){
  $(".cotn_principal").slideUp(500);
});
