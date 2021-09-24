$(document).ready(function(){
  // 햄버거 메뉴
  $('.T_iconwrap').click(function(){
    $(this).find('.total_line').toggleClass('X_active');
    $('.gnb_subwrap_bar').stop().slideToggle();
  });


  // main
  let num=0,
  slideleng=$('.slides').length;

  setInterval(function(){
    if(num<slideleng-1){
      num++;
    }else{
      num=0;
    };

    $('.slides').removeClass('active');
    $('.slides').eq(num).addClass('active');

    const $btnDefault=$('.btn_wrap div').css({"background-color":"#fff",'color':'#353F67'});

    if(num==0){
      $('.main').css('background-color','#F7C1C1');
      $btnDefault;
      $('.btn_wrap div').eq(0).css('background-color','#F7C1C1');
    }else if(num==1){
      $('.main').css('background-color','#F4CF99');
      $btnDefault
      $('.btn_wrap div').eq(1).css('background-color','#F4CF99');
    }else if(num==2){
      $('.main').css('background-color','#E2F3D3');
      $btnDefault
      $('.btn_wrap div').eq(2).css('background-color','#E2F3D3');
    }else if(num==3){
      $('.main').css('background-color','#A1DDC1');
      $btnDefault
      $('.btn_wrap div').eq(3).css('background-color','#A1DDC1');
    }else if(num==4){
      $('.main').css('background-color','#F8F4D7');
      $btnDefault
      $('.btn_wrap div').eq(4).css('background-color','#F8F4D7');
    }

  },3500);


  // sec1 - slider
  const $new_list_wrap=$('.new_list_wrap'),
  $prev=$('.prev'),
  $next=$('.next');
  let currentIdx=0;
  
  $prev.click(function(){
    gotoSlider(currentIdx-1)
    if(currentIdx===0){
      $prev.addClass('active');
    }else{
      $prev.removeClass('active');
      $next.removeClass('active');
      gotoSlider(currentIdx)
    };
  });

  $next.click(function(){
    gotoSlider(currentIdx+1)
    if(currentIdx<3){
      $prev.removeClass('active');
      $next.removeClass('active');
      gotoSlider(currentIdx)
    }else{
      $next.addClass('active');
    };
  });

  function gotoSlider(num){
    $new_list_wrap.css('left',(-33.3333*num)+'%');
    currentIdx=num;
  }


  //sec2 -tab
  $('.tab_link').click(function(){
    $('.tab_link').removeClass('on');
    $('.best_list').removeClass('on');
    $(this).addClass('on');
    $('#'+$(this).data('id')).addClass('on');
    // console.log($(this).data('id'));
  });

  //sec4 - plus_btn
  $('.plus_btn').click(function(){
    $(this).hide();
    $('.minus_btn').show();
    $('.sns_list:nth-of-type(5),.sns_list:nth-of-type(6),.sns_list:nth-of-type(7),.sns_list:nth-of-type(8)').show()
  })
  $('.minus_btn').click(function(){
    $(this).hide();
    $('.plus_btn').show();
    $('.sns_list:nth-of-type(5),.sns_list:nth-of-type(6),.sns_list:nth-of-type(7),.sns_list:nth-of-type(8)').hide()
  })
  



});