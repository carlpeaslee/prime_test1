
$(document).ready( function() {
  $('.generate').on("click", makeThang);
  $('.container').on("click", '.delete', deleteThang);
  $('.container').on("click", '.change', reddifyThang);
});

//variables
var counter = 0;

//functions

function makeThang() {
  counter++;
  $('.container').append('<div class="thang"></div>');
  $('.container').children().last().append('<button class="change">COLORZ</button>');
  $('.container').children().last().append('<button class="delete">BUBYE</button>');
  $('.container').children().last().append('<h2> Counter '+ counter + ' </h2>');
}

function deleteThang() {
    $(this).parent().remove();
}

function reddifyThang() {
  $(this).parent().toggleClass('red');
}
