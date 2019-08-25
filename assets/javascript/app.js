var jumbotronHeight;

function parallaxScrolling(){
    var scrolled = $(window).scrollTop();
    $('.jumbotron-bg').css('height', (jumbotronHeight-scrolled) + 'px');
}

function animations() {
   
    var delayTime = 0;
    $('[data-animate]').css({opacity: '0'});
    $('[data-animate]').waypoint(function (direction) {
        delayTime += 150;
        $(this).delay(delayTime).queue(function (next) {
            $(this).toggleClass('animated');
            $(this).toggleClass($(this).data('animate'));
            delayTime = 0;
            next();
        });
    },
    {
        offset: '95%',
        triggerOnce: true
    });
}

$(document).ready(function () {
    
    $('.jumbotron').css('height', screen.height);
    jumbotronHeight = $('.jumbotron').outerHeight();
    
    $('body').scrollspy({target: "#top-nav", offset: 50});

    $("#top-nav a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    $(".jumbotron a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(".scroll-trigger").click(function(){
        console.log('click');
        $(".navbar-collapse").collapse("hide");
    });
    
    function jsScroll() {
        var nav = $('#top-nav');
        if (nav.offset().top > 100) {
            nav.addClass('navbar-shrink');
        } else {
            nav.removeClass('navbar-shrink');
        }
    }

    $(window).scroll(function(e){
        parallaxScrolling();
        jsScroll();
    });


    parallaxScrolling();
    animations();
    $.waypoints('refresh');


});

// jumbotron size


// animations


// scroll click function


//