// General JS Codes

// Close button instances
var modalArea = document.getElementById("modal__area");
const sidemenuArea = document.getElementById('sidemenu--area')

function closeThing(thingtoclose) {
    document.body.style.overflow = 'auto'
    thingtoclose.style.display = 'none'
    document.body.classList.remove('darken__filter')
};

// Opening side menu of Navbar
function showSidemenu(){
    const sidemenuArea = document.querySelector('#sidemenu--area')
    sidemenuArea.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    document.body.classList.add('darken__filter')
}

(function ($) {
    $(document).ready(function () {

        $('#cssmenu li.has-sub>a').on('click', function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(200);
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown(200);
                element.siblings('li').children('ul').slideUp(200);
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(200);
            }
        });

    });
})(jQuery);
