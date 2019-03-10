$(".wall-item").mouseenter(function(e){
    e.stopPropagation();
    var $div = $(this);
    $div.children().next().next("div").css({"display":"block","margin-left":"111px",})
})
$(".wall-item").mouseleave(function(e){
    e.stopPropagation();
    var $div=$(this);
    $div.children().next().next("div").css("display","none")
})