var array=[];
$("#clicks").on("click","button",function () {
    if(!$(this).hasClass("content_body_left_left_active")){
        var right=$(this).parents("li").find(".right_");
        var left=$(this).parents("li").find(".left_");
        if(array.length<4){
            $(this).addClass("content_body_left_left_active");
            if($(this).hasClass("left_")){
                array.push($(this).data("id"));
                right.removeClass("content_body_left_left_active");
                array.remove(right.data("id"));
                console.log(array);
            }else {
                left.removeClass("content_body_left_left_active");
                array.remove(left.data("id"));
                array.push($(this).data("id"));
                console.log(array);
            }
        }else {
            if($(this).hasClass("content_body_left_left_active")){
                $(this).removeClass("content_body_left_left_active");
                array.remove($(this).data("id"));
            }else {
                console.log("超出最大选项!");
            }
        }
    }else {
        $(this).removeClass("content_body_left_left_active");
        array.remove($(this).data("id"));
        console.log(array)
    }
    // return array;
});
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
//
// $("#btn_submit").click(function () {
//     $("#layer").slideDown(2000);
//
// });
// $("#out_").click(function () {
//     $("#layer").slideUp(2000);
// });
$("#btn_submit").click(function () {
    if(array.length==4){
        $("#layer").slideDown("slow");
        for(i in array){
         console.log(i);
        }
        console.log(array);
    }else {
        console.log("请选择4个");
    }
});
$("#out_").click(function () {
    console.log("退出");
    $("#layer").slideUp("slow");
});
