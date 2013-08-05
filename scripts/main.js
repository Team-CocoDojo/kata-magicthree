$(document).on('ready', function(){

  var generatedHTML = "";

  for(var i=0; i<=64; ++i){
    generatedHTML += "<div>"+i+"</div>";
  }

  $('body').html(generatedHTML);

});