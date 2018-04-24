
$(
    $("#add").on("click",function () {
        var aDd=document.getElementById("add");
        var aMessage=document.getElementById("messge_content");
//        $(".hd").toggle();
        if(aDd.className=="bg1"){
            aDd.className="bg2";
            aMessage.className="message_content1";
        }else {
            aDd.className="bg1";
            aMessage.className="message_content";
        }
    }),
    $.ajax({
        type:"get",
        url:"http://m.xiangsong.cn/mob/home/getshowarealist",
        data:{
            id:5,
            type:"new"
        },
        timeout:5000,
        dataType:"json",
        success:function (data) {
//              for(var i=0;i<data.length;i++){
//
//              }
        }
    })
);