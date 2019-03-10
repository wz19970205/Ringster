$(".select-1").click(function(e){
    e.stopPropagation();
    $("#content1").show();
    $("#content2").hide();
    $("#content3").hide();
    $("#content4").hide();
})
$(".select-2").click(function(e){
    e.stopPropagation();
    $("#content2").show();
    $("#content1").hide();
    $("#content3").hide();
    $("#content4").hide();
})
$(".select-3").click(function(e){
    e.stopPropagation();
    $("#content3").show();
    $("#content1").hide();
    $("#content2").hide();
    $("#content4").hide();
})
$(".select-4").click(function(e){
    e.stopPropagation();
    $("#content4").show();
    $("#content1").hide();
    $("#content2").hide();
    $("#content3").hide();
})
$("#tab li").click(function(){
    var $li=$(this);
    var $div=$(".active");
    var i=$li.index();
    $div.css("left",70*i);
})
