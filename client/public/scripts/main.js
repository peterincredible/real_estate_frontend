console.log("connected successfully")
$(document).ready(function(){
    let just_loaded = false;
    $('.carousel-container').slick({
        nextArrow:$(".next"),
        prevArrow:$(".prev"),
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
    });

    $(`.apartment-item:nth-child(${1})`).addClass("myhover");
    $(".carousel-container").on("afterChange",(event, slick, currentSlid)=>{
        $(`.apartment-item:not(.apartment-item:nth-child(${currentSlid + 1}))`).removeClass("myhover");
        $(`.apartment-item:nth-child(${currentSlid + 1})`).addClass("myhover");
        $(".slick-slide:not(.slick-active) .carousel-content h1").removeClass("show")
        $(".slick-slide.slick-active .carousel-content h1").addClass("show")
       
    })
    $('.feature-slider').slick({
        nextArrow:$(".f-next"),
        prevArrow:$(".f-prev"),
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 100000, 
                settings:"unslick"
              },
              {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
              },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
              },
              {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
              }
           
        ]
    });
  });