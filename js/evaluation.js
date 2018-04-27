$(".likes").on("click","img",function () {
    if($(this).attr("src")=="./images/evaluation/expression/baton-2.png"){
        $(this).attr("src","./images/evaluation/expression/baton-1.png");
        var text=$(this).parents(".likes").find("span").text();
        text++;
        $(this).parents(".likes").find("span").text(text);
        console.log(text);

    }else {
        $(this).attr("src","./images/evaluation/expression/baton-2.png");
        var text=$(this).parents(".likes").find("span").text();
        if(text==0){
            text=0;
        }else {
            text--;
        }
        $(this).parents(".likes").find("span").text(text);
    }
});
var top_=$(".top-font_right").text();
$(".top-font_right").css("color","#f32613");
top_*=10;
$(".top_bar_active").width(top_+"%");
var center_=$(".center_font_right").text();
$(".center_font_right").css("color","#fdc631");
center_*=10;
$("center_bar_active").width(center_+"%");
var botton_=$(".bottom_font_right").text();
$(".bottom_font_right").css("color","#ff7d04");
botton_*=10;
$("bottom_bar_active").width(botton_+"%");
