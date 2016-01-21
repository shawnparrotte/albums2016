
//Make AJAX Request

var goGetEm = $.getJSON("http://localhost:3000/api", function(result){})

  .done(function(result){

    var cardNumber = result;

    //Create Individual Cards
    for(i = 0; i < cardNumber.length; i++){
      var htmlInject = '<div class="container">';
          htmlInject += '<div class="album-cover" style="background-image: url(' + cardNumber[i].cover + ');"></div>';
          htmlInject += '<div class="album-info">';
          htmlInject += '<h2 class="artist">' + cardNumber[i].artist + '</h2>';
          htmlInject += '<h3 class="album-name">' + cardNumber[i].album + '</h3>';
          htmlInject += '<p class="genre">' + cardNumber[i].genre + '</p>';
          htmlInject += '<div class="footer">';
          htmlInject += '<p class="score">' + cardNumber[i].score + '</p>';
          htmlInject += '<div class="listen"><a href="' + cardNumber[i].link + '">Listen</a></div>';
          htmlInject += '</div></div>';

      //Append Card to Site
      $("#card-wrapper").append(htmlInject);
    }

  });


//Interactivity

$( "#card-wrapper" ).on( "mouseenter", ".container", function() {
  var cont = $(this).children()
  $(cont[0]).css("background-size", "300px 300px");
});

$( "#card-wrapper" ).on( "mouseleave", ".container", function() {
  var cont = $(this).children()
  $(cont[0]).css("background-size", "275px 275px");
});
