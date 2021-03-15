jQuery(document).ready(function(){
    //메뉴 버튼 클릭하면 주메뉴(nav) 나옴
    $('.menu_btn').click(function(){
        //nav영역이 보여진 후에 function다음의 명령어 실행(메뉴 페이드인)
       $('nav').show(function(){
           $('nav ul li').each(function(){
              var indexNum=$(this).index();
               $(this).delay(indexNum*300).fadeIn();
           });
       }); 
    });
    //메뉴의 닫기 버튼을 클릭하면 주메뉴 안보임
    $('nav .close').click(function(){
       $('nav').hide();                   
    });
    
    //주메뉴를 클릭하면 해당 section으로 이동
    $('nav ul li a').click(function(){
       $('nav').hide();
        var menu_attr=$(this).attr('href');
        $('html,body').animate({
           scrollTop:$(menu_attr).offset().top},1000);
        });
    
    
    
    //스킬바
    $(window).scroll(function(){
       //화면 맨위쪽 위치:0을 변수에 저장
        var winTop=$(this).scrollTop();
        //화면 아래쪽 위치를 변수에 저장
        var winBottom=winTop+$(window).height();
        //두번째 section의 시작 위치값을 변수에 저장
        var secTop=$('.profile').offset().top;
        
        if(secTop<winTop && secTop>winBottom){
            
        $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
        width:$(this).attr('data-percent')
		},1000);
	});  
        }else{
        $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
        width:0
		},1000);
	});
        }
    });
    
    
    
    
    //swiper 슬라이드(web)
    var swiper = new Swiper('.swiper-container', {
        loop:true, //연속으로 슬라이드효과
        autoplay: {
           delay: 5000,
         },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    //swiper 슬라이드(editable)
    var swiper = new Swiper('.s1', {
      
      autoplay: {
           delay: 5000,
         },
      slidesPerView: 3,
      spaceBetween: 30,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    
    //팝업갤러리
    var focus_img=$('.popup .swiper-slide a');
    var focus=$('.focus');
    var container=$('.focus .container');
    //이미지 변호를 나타내는 변수 선언
    var current=0;
    //이미지에 클릭 이벤트 설정
    focus_img.click(function(e){
        //a태그의 속성 제거
        e.preventDefault();
        //current에 클릭한 이미지의 data 속성값저장
        current=$(this).attr('data');
        current=Number(current);
        
        //container 비우기
        container.empty();
        //클릭한 a태그의 href속성값을 view_img변수에 저장
        var view_img=$(this).attr('href');
        //view_img값을 container에 추가
        container.append('<img src="'+view_img+'">');
        //focus영역 보임
        focus.fadeIn();
    });
    
    $('.popup_close').click(function(e){
        e.preventDefault();
        container.empty();
        focus.hide();
    });
    
    $('.focus .next_btn').click(function(e){
        e.preventDefault();
        //이미지의 data속성값 1 증가시킴
        current=current+1;
        //만약 current값이 이미지의 총 개수보다 커지면 다시 1로 초기화시킴
        if(current>7){
            current=1;
        }
        //container 비우기
        container.empty();
        container.append('<img src="img/b'+current+'.jpg">');
    });
    
    $('.focus .prev_btn').click(function(e){
        e.preventDefault();
        //이미지의 data속성값 1 감소시킴
        current=current-1;
        //만약 current값이 1보다 작으면 다시 1로 초기화시킴
        if(current<1){
            current=7;
        }
        //container 비우기
        container.empty();
        container.append('<img src="img/b'+current+'.jpg">');
    });
    
    
    
    
});