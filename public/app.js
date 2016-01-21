//create unique card with jquery

var cardNumber = serverSide.length;

for(i = 0; i < cardNumber; i++){
  var htmlInject = '<div class="container">';
      htmlInject += '<div class="album-cover" style="background-image: url(' + serverSide[i].cover + ');"></div>';
      htmlInject += '<div class="album-info">';
      htmlInject += '<h2 class="artist">' + serverSide[i].artist + '</h2>';
      htmlInject += '<h3 class="album-name">' + serverSide[i].album + '</h3>';
      htmlInject += '<p class="genre">' + serverSide[i].genre + '</p>';
      htmlInject += '<div class="footer">';
      htmlInject += '<p class="score">' + serverSide[i].score + '</p>';
      htmlInject += '<div class="listen"><a href="' + serverSide[i].link + '">Listen</a></div>';
      htmlInject += '</div></div>';

  $("#card-wrapper").append(htmlInject);
}

//interactivity

$(".container").mouseenter(function(){
  var cont = $(this).children()

  $(cont[0]).css("background-size", "300px 300px");
}).mouseleave(function(){
  var cont = $(this).children()

  $(cont[0]).css("background-size", "275px 275px");
})
