$(document).ready(function(e) {
    $(".mobile-button").click(function(event) {
        $(".navigation_link").toggleClass("mobile-open");
        event.stopPropagation();
    });

    $(document).click(function(event){
        if (!$(event.target).hasClass('link')) {
            $(".navigation_link").removeClass("mobile-open");
        }
    });
});



$(document).ready(function(){
    $('.links').click(function(){
      $('.links').removeClass("links_actives");
      $(this).addClass("links_actives");
  });
  });