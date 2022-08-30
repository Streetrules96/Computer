$(document).ready(function() {

    // Burger ==========================================================
    
    $(".burger").click(function(event) {
        $(".burger, .nav").toggleClass("active");
        $("body").toggleClass("lock");
    });

    $('.nav').click(function(event) {
        $('.burger,.nav').removeClass('active');
        $('body').removeClass('lock');
    });
    
    // Header scroll ======================================================
    
    var header = $(".header");
    var scrollChange = 1;
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= scrollChange) {
            header.addClass("header-fixed");
        } else {
            header.removeClass("header-fixed");
        }
    });
    
    // smooth scroll ===============================================

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var $this = $(this);
        var blockId = $(this).data("scroll");
        var blockOffset = $(blockId).offset().top -63; //-63 это высота header (если он фиксед)
        
        $("#nav a").removeClass("active");
        $this.addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);  // 500 - скорость анимации (0.5 сек)
    });
    
    // Animation ======================================================
    
    const animItems = document.querySelectorAll('._anim-items');
    
    if(animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
                
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                
                if(animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight -  window.innerHeight / animStart;
                }
                
                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if(!animItem.classList.contains('_anim-no-hide')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        
        animOnScroll();
    }

    
    
    

    
    
    
   
});