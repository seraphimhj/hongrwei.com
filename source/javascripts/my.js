$(function ()  { 
  $("#example").popover();  
  // $('#product-thumb2').popover({title: "title", content: "contnt"});

  $('#product-thumb').hover(function() {
    var url=$(this).data('url');
    var image='<img src="/images/products/' + $(this).data('image') + '">';
    var contnt='<a href="' + url + '">' + image + '</a>';
    console.log(url);
    console.log(image);
    console.log(contnt);
    $(this).popover({title: url, content: image});
  });         

  $('.accordion-body').collapse("hide");

  // $('.accordion-body').mouseleave(function(){
  //   $(this).collapse("hide");
  // });
  
  var addFav = function() {
    if (document.all) {
      window.external.addFavorite(this.href, this.title);
    } else if (window.sidebar) {
      window.sidebar.addPanel(this.title, this.href, "");
    }
  }; 
});  
 

 
