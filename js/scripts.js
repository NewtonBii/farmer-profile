$("#toggle").click(function(event){
  event.preventDefault();
  $("#sidebar1").fadeToggle(1000);
  $("#toggle").hide(500);
});

$("#x-button").click(function(){
  $("#sidebar1").slideUp(500);
  $("#toggle").show(1000);
});
