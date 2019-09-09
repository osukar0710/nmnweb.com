$(function () {
/***********************************************
*                 モーダルメニュー                *
************************************************/ 
   $(document).on("click", "#menuTrigger",function () {
    $(this).toggleClass("active");
    if( $(this).hasClass("close")) {
        //モーダルクローズ
        $("#overLay").css("left", "-100%");
        $(this).removeClass("close");
        $("#nav").fadeIn();
        // $("#menu").css("background-color", "rgb(243, 187, 191)");
    } else {
        //モーダルオープン
        $("#overLay").css("left", 0);
        $(this).addClass("close");
        $("#nav").fadeOut();
        // $("#menu").css("background-color", " ");
        $("#menu").css("background-color", " ");
    }
   });
   $(document).on("click", ".pageBack",function () {
        //モーダルクローズ menu
        $("#overLay").css("left", "-100%");
        $("#menuTrigger").removeClass("close");
        $("#menuTrigger").removeClass("active");
        $("#nav").fadeIn();
   });
/***********************************************
*                  トップ画面                    *
************************************************/ 
   $(window).scroll(function () {
       let scrollPoint = $(this).scrollTop();
       if( scrollPoint > 20 ) {
           $("#nav").css("opacity", 1);
           $("#nav").css("box-shadow", "0 3px 3px gray");
       } else {
        $("#nav").css("opacity", .9);
        $("#nav").css("box-shadow", "none");
       }
   });

/***********************************************
*          スクロールに合わせて要素を表示           *
************************************************/ 
  $(window).scroll(function (){
        $('.elem_fadeIn_up, .elem_fadeIn_slideLeft, .elem_fadeIn_slideRight').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});