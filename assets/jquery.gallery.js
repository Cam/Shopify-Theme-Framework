/*!
	Basic Image Gallery jQuery thanks to Nimpkish http://www.nimpkish.com/blog/simple-javascript-image-gallery
*/
$('#images_thumbnails a').click(function(){
  var newImageSrc = $(this).attr('href');
  $('#images_full img').attr({'src': newImageSrc });
  return false;
});