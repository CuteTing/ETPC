
        $(function(){
            $("#js1").click(function () {
                $("#js1").css({"background-color":"#1B82E2","color":"#FFFFFF"});
                $("#js1").parent().siblings().find("a").css({"background-color":"#FFFFFF","color":"#000000"});
                $("#js2").show();
                $("#js2").siblings().hide();
            });

            $("#fz1").click(function () {
                $("#fz1").css({"background-color":"#1B82E2","color":"#FFFFFF"});
                $("#fz1").parent().siblings().find("a").css({"background-color":"#FFFFFF","color":"#000000"});
                $("#fz2").show();
                $("#fz2").siblings().hide();
            });

            $("#wh1").click(function () {
                $("#wh1").css({"background-color":"#1B82E2","color":"#FFFFFF"});
                $("#wh1").parent().siblings().find("a").css({"background-color":"#FFFFFF","color":"#000000"});
                $("#wh2").show();
                $("#wh2").siblings().hide();
            });

            $("#sl1").click(function () {
                $("#sl1").css({"background-color":"#1B82E2","color":"#FFFFFF"});
                $("#sl1").parent().siblings().find("a").css({"background-color":"#FFFFFF","color":"#000000"});
                $("#sl2").show();
                $("#sl2").siblings().hide();
            });

            $("#wm1").click(function () {
                $("#wm1").css({"background-color":"#1B82E2","color":"#FFFFFF"});
                $("#wm1").parent().siblings().find("a").css({"background-color":"#FFFFFF","color":"#000000"});
                $("#wm2").show();
                $("#wm2").siblings().hide();
            });

            $("#lx1").click(function () {
                $("#lx1").css({"background-color":"#1B82E2","color":"#FFFFFF"});
                $("#lx1").parent().siblings().find("a").css({"background-color":"#FFFFFF","color":"#000000"});
                $("#lx2").show();
                $("#lx2").siblings().hide();
            });

            $(document).scroll(function () {
                var top =$("#dw").offset().top- $(window).scrollTop();
                if(top<0){
                    $('#ct_nav').css({"position": "fixed","top":"0px"});
                }else {
                    $('#ct_nav').css({"position": "relative"});
                }
            });

        });
        
        

        // window.onload=function() {
        //     var ww = document.getElementById("ww");
        //     var www = document.getElementById("www");
        //     var q1 = document.getElementById("q1");
        //     var qq = document.getElementById("qq");
        //     www.onclick = function () {
        //         tom();
        //     }
        // }
        //     function tom() {
        //         qq.style.display="block";
        //         q1.style.display="none";
        //     }


         

