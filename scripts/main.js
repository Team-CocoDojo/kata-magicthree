$(document).on('ready', function(){

  var generatedHTML = "";

  for(var i=0; i<=64; ++i){
    generatedHTML += "<div class='cell'>"+i+"</div>";
  }

  $('body').html(generatedHTML);

});