
function toggle_visibility() {
  var e = document.getElementById("form-upload-produce");
  if (e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'none';
}
function toggle_visibility1() {
  var e = document.getElementById("carousel");
  if (e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'none';
}

function toggle_visibility2() {
  var e = document.getElementById("graph");
  if (e.style.display == 'none')
    e.style.display = 'block';
  else
    e.style.display = 'none';
}

$(".bouton-contact").click(function(event){
  $("#form-upload-produce").fadeOut(5000);
  $("#successfull-submit-box").show(1000).fadeOut(2000)
});

$(document).ready(function() {

  var speed = 5000;

  var run = setInterval(rotate, speed);
  var slides = $('.slide');
  var container = $('#slides ul');
  var elm = container.find(':first-child').prop("tagName");
  var item_width = container.width();
  var previous = 'prev';
  var next = 'next';
  slides.width(item_width);
  container.parent().width(item_width);
  container.width(slides.length * item_width);
  container.find(elm + ':first').before(container.find(elm + ':last'));
  resetSlides();

  $('#buttons a').click(function(e) {
    if (container.is(':animated')) {
      return false;
    }
    if (e.target.id == previous) {
      container.stop().animate({
        'left': 0
      }, 1500, function() {
        container.find(elm + ':first').before(container.find(elm + ':last'));
        resetSlides();
      });
    }

    if (e.target.id == next) {
      container.stop().animate({
        'left': item_width * -2
      }, 1500, function() {
        container.find(elm + ':last').after(container.find(elm + ':first'));
        resetSlides();
      });
    }


    return false;

  });


  container.parent().mouseenter(function() {
    clearInterval(run);
  }).mouseleave(function() {
    run = setInterval(rotate, speed);
  });


  function resetSlides() {

    container.css({
      'left': -1 * item_width
    });
  }

});


function rotate() {
  $('#next').click();

// $(".btn_login").click(function(event){
//   window.location='buyer.html';
// });
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}

}
