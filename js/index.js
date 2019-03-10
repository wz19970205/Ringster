$("#s1").click(function(e){
    e.stopPropagation();
    var $s1=$(this);
    $s1.parent().prev().prev().prev().show();
    $s1.parent().prev().prev().hide();
    $s1.parent().prev().hide();
})
$("#s2").click(function(e){
    e.stopPropagation();
    var $s2=$(this);
    $s2.parent().prev().prev().show();
    $s2.parent().prev().prev().prev().hide();
    $s2.parent().prev().hide();
})
$("#s3").click(function(e){
    e.stopPropagation();
    var $s3=$(this);
    $s3.parent().prev().prev().prev().hide();
    $s3.parent().prev().prev().hide();
    $s3.parent().prev().show();
})

window.onload=function(){
    new AutoPlay(".slid")
}