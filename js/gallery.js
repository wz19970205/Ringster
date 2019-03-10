
$(".img-wall>div").mouseenter(function(e){
    e.stopPropagation();
    var $div=$(this);
    $div.children("p").css({
            "transform":"rotate(-45deg)",
            "display":"block"
        });
})
$(".img-wall>div").mouseleave(function(e){
    e.stopPropagation();
    var $div=$(this);
    $div.children("p").css("display","none");
})
//点击Full View 弹出轮播图
$(".img-wall div p").click(function(){
    var $p=$(this);
    $p.parent().parent().parent().next().show();  
})
//左右按钮
var p=1;
$(".arrow-left").click(function(){
    var $left=$(this);
    if(p>1){
        p=p-1;
        $left.prev().html(`image:${p}/7`);
        $left.parent().prev().children().attr("src",`img/g${p}.jpg`)
    }
})
$(".arrow-right").click(function(){
    var $right=$(this);
    if(p<=6){
        p=p+1;
        console.log(p);
        $right.prev().prev().html(`image:${p}/7`);
        $right.parent().prev().children().attr("src",`img/g${p}.jpg`)
    }
})
//点击X 轮播图关闭
$("#close").click(function(e){
    e.stopPropagation();
    var $close=$(this);
    $close.parent().parent().parent().hide();
})