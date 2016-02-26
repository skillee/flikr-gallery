/**
 * Project: HackReactor.
 * By: Ronny Rosabal
 * Date: 2/25/16
 * Time: 6:45 PM
 * Content:
 */


var windowHeight = $( document ).height();
var windowWidth = $( document).width();
var wrapperHeight = windowHeight * .75;
var key = '51c841d433d9b29285520583ef04342f';
var tag;
var html = '';
var link = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key + '&tags=' + tag +'&per_page=20&format=json&nojsoncallback=1';


$('#wrapper').css('height', wrapperHeight + 'px');


var ajaxCall = function(){
  $.getJSON( link, function( data ){
    console.log( data );
    for(var i = 0; i < data.photos.photo.length; i++){
      var id = data.photos.photo[i].id;
      var server = data.photos.photo[i].server;
      var secret = data.photos.photo[i].secret;
      var farm = data.photos.photo[i].farm;
      html += '<li><img src="http://farm' + farm + '.static.flickr.com/' + server + '/'+ id + '_' + secret + '_q.jpg"></li>';
    }
  });
  setTimeout(function(){
    $('#pictureList').html( html );
  }, 100);
};

$('#search').on('click', function(){
  $('#pictureList' ).html('');
  tag = $('#input' ).val();
  $('#input' ).val("");
  ajaxCall();
});

$('#clear').on('click', function(){
  $('#pictureList' ).html('');
});

