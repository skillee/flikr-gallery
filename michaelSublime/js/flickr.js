
var key = '51c841d433d9b29285520583ef04342f';
var tag = 'dog';
var link = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key + '&tags=' + tag +'&per_page=20&format=json&nojsoncallback=1';
var returned;
var photo;
var user;
var title = [];
var html = '';

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
  $('#foo2').html( html );
}, 1000);