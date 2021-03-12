jQuery(document).ready(function(){
    //스킬바
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
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