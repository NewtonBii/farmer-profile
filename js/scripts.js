$("#toggle").click(function(event){
  event.preventDefault();
  $(".sidebar").fadeToggle(1000);
  $("#toggle").hide(500);
});

$("#x-button").click(function(){
  $(".sidebar").slideUp(1000);
  $("#toggle").show(500);
});
