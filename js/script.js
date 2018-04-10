$(document).ready(function () {

    var colorsHtml = "";

    // Smooth scrolling
  $("a").on('click', function(event) {
   
    if (this.hash !== "") {
     
      event.preventDefault();
      
      var hash = this.hash;
     
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){   
        
        window.location.hash = hash;
      });
    } 
  });

  // Hardcoded products object   

    var products = [{
            color: 'Nude',
            colorUrl: 'images/tan-color.jpg',
            images: {
                image01: 'images/tan01.jpg',
                image02: 'images/tan02.jpg',
                image03: 'images/tan03.jpg',
                image04: 'images/tan04.jpg',
                image05: 'images/tan05.jpg'
            }
        },
        {
            color: 'Black',
            colorUrl: 'images/black-color.jpg',
            images: {
                image01: 'images/black01.jpg',
                image02: 'images/black02.jpg',
                image03: 'images/black03.jpg',
                image04: 'images/black04.jpg',
                image05: 'images/black05.jpg'
            }
        },
        {
            color: 'Red',
            colorUrl: 'images/red-color.jpg',
            images: {
                image01: 'images/red01.jpg',
                image02: 'images/red02.jpg',
                image03: 'images/red03.jpg',
                image04: 'images/red04.jpg',
                image05: 'images/red05.jpg'
            }
        },
        {
            color: 'Snake',
            colorUrl: 'images/snake-color.jpg',
            images: {
                image01: 'images/snake01.jpg',
                image02: 'images/snake02.jpg',
                image03: 'images/snake03.jpg',
                image04: 'images/snake04.jpg',
                image05: 'images/snake05.jpg'
            }
        }
    ]

    // Carusel slides initial dynamic loading

    $.each(products[0].images, function (key, value) {
        $(".carousel-inner").append('<div class="carousel-item easyzoom"><a href="' + value + '"><img class="d-block w-100" src="' + value + '" id="' + key + '"></a></div>');
        $(".carousel-indicators").append('<li data-target="#carouselExampleIndicators" data-slide-to=""><img src="' + value + '"></li>');
    })

    $('.easyzoom').easyZoom();

    $(".carousel-indicators li").each(function (i, li) {
        $(li).attr("data-slide-to", i);
    })

    var index = $(".carousel-indicators > li").index(this);
    $('.carousel-inner > div:first-child').addClass('active');    
    $('.carousel-indicators > li:first-child').addClass('active');


    // Color picker display

    $("#colorOutput").append(products[0].color);

    $.each(products, function (index, value) {
        colorsHtml += '<img src="' + products[index].colorUrl + '" class="pick-color" alt="' +
            products[index].color + '" id="color-' + index + '">';
    });

    $('#colors').append(colorsHtml);

    $('#colors > img').click(function () {
        var index = $("#colors > img").index(this);
        $("#colorOutput").empty().append(products[index].color);
        $(this).siblings('img').removeClass('pick-color-selected');
        $(this).addClass("pick-color-selected");
    });

     // Color picker Logic

    $('#colors > img').click(function () {

        $(".carousel-inner").empty();
        $(".carousel-indicators").empty(); 
        $("#add-to-cart").text("Select a size");
        $('ul.size-selection li label input').prop('checked', false)
        $("ul.size-selection li").click(function(){
            $("#add-to-cart").text("Add to Cart").removeAttr('disabled').css("background-color","#595959");
        })

        var index = $("#colors > img").index(this);
        var value = products[index].color;

        $.each(products, function (i) {

            if (value === products[i].color) {

                $.each(products[i].images, function (key, value) {

                    $(".carousel-inner").append('<div class="carousel-item easyzoom"><a href="' + value + '"><img class="d-block w-100" src="' + value + '" id="' + key + '"></a></div>');
                    $(".carousel-indicators").append('<li data-target="#carouselExampleIndicators" data-slide-to=""><img src="' + value + '"></li>');

                })
            }
        })


        $(".carousel-indicators li").each(function (i, li) {
            $(li).attr("data-slide-to", i);
        })

        $('.carousel-inner > div:first-child').addClass('active');
        $('.carousel-indicators > li:first-child').addClass('active');

        // Slider zoom

        $('.easyzoom').easyZoom();        

    })

    // Rating Stars initialization 
    
    $(".rate").rate();

    // Review form display 

    $( "#write-review" ).click(function() {
        $( "#review-form" ).slideDown( "slow");
        $('#write-review').hide();
      });
    
})