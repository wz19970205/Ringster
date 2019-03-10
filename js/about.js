$(".dropdown>div").on("click","a",function(){
    var $a=$(this);
    $a.parent().next().toggle();
})


$(".img-wall-item").hover(function(e){
    e.stopPropagation();
    var $div=$(this);
    $div.children().next().toggle();
})

$(".floor-1").hover(function(){
    var $floor=$(this);
    $(".title-img1").toggle(".title-img1");
    $(".title-img2").toggle(".title-img2");  
})
