/**
 * Project: HackReactor.
 * By: Ronny, Leland, Michael
 * Date: 2/25/16
 * Time: 6:45 PM
 * Content: Final Project
 */


var windowHeight = $( document ).height();
var wrapperHeight = windowHeight * .75;
var key = '51c841d433d9b29285520583ef04342f';
var html = '';


$('#wrapper').css('height', wrapperHeight + 'px');

$('#clear').on('click', function(){
  $( '#pictureList' ).empty();
});

var makePhotoList = function( data ){
  setTimeout( function(){
    for( var i = 0; i < data.photos.photo.length; i++ ) {
      var id = data.photos.photo[ i ].id;
      var server = data.photos.photo[ i ].server;
      var secret = data.photos.photo[ i ].secret;
      var farm = data.photos.photo[ i ].farm;
      html += '<li><img src="http://farm' + farm + '.static.flickr.com/' + server + '/' + id + '_' + secret + '_q.jpg"></li>';
    }
    $( '#pictureList' ).html( html );
    popup();//most be called in here otherwise mouseenter and mouseleave wont work
  }, 50 );
};

$( '#search' ).on( 'click', function(){
  html = '';
  $( '#pictureList' ).empty();
  var tag = $( '#input' ).val();
  $( '#input' ).val( '' );
  $.ajax( {
    url : 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key + '&tags=' + tag + '&per_page=20&format=json&nojsoncallback=1',
    type : 'GET',
    dataType : 'json',
    success : makePhotoList
  } );
} );

function popup(){
  $( 'ul li img' ).mouseenter( function(){
    $( this ).parent().append( '<div class="popup"><img></div>' );
    var link = $( this ).attr( 'src' );
    link = link.slice( 0, -5 ) + 'n.jpg';
    $( '.popup img' ).attr( 'src', link );
  } ).mouseleave( function(){
    $( '.popup' ).remove();
  } );
}

