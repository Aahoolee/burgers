///// ------One Page Scroll------

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const setActiveMenuItem = itemEq => {
    $('.scroll__item')
        .eq(itemEq)
        .addClass('scroll__item--active')
        .siblings()
        .removeClass('scroll__item--active');
};

const performTransition = sectionEq => {
    const position = `${sectionEq * -100}%`;
    if (inScroll) return;

    inScroll = true;

    sections
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');

    display.css({
        transform: `translate(0, ${position})`,
        '-webkit-transform': `translate(0, ${position})`
    });


    const transitionDuration = parseInt(display.css('transition-duration')) * 100; // время в мс
    setTimeout(() => {
        inScroll = false;
        setActiveMenuItem(sectionEq);

    }, transitionDuration + 300); // за 300 мс проходит инерция мыши

};

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'up' && prevSection.length){
        performTransition(prevSection.index());
    }

    if (direction === 'down' && nextSection.length){
        performTransition(nextSection.index());
    }
};

$(document).on({
    wheel: event => { // прокручивание мышью
        const deltaY = event.originalEvent.deltaY;
        const direction = deltaY > 0
            ? 'down'
            : 'up'

        scrollToSection(direction);
    },

    keydown: event => { // прокручивание слайдера с клавиатуры
        // console.log(event.keyCode);
        switch (event.keyCode){
            case 40:
                scrollToSection('down');
                break;
            case 38:
                scrollToSection('up');
                break;
        }
    }

});

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    performTransition(target);

});

// ///// OPS Вовы
//
// const sections = $(".section");
// const display = $(".maincontent");
// let inScroll = false;
//
// // const mobileDetect = new MobileDetect(window.navigator.userAgent);
// // const isMobile = mobileDetect.mobile();
//
// const setActiveMenuItem = itemEq => {
//     $('.fixed-menu__item').eq(itemEq).addClass('active')
//         .siblings().removeClass('active')
// }
//
// const performTransition = sectionEq => {
//     const position = `${sectionEq * -100}%`;
//
//     if (inScroll) return;
//
//     inScroll = true;
//
//     sections
//         .eq(sectionEq)
//         .addClass("active")
//         .siblings()
//         .removeClass("active");
//
//     display.css({
//         transform: `translate(0, ${position})`,
//         "-webkit-transform": `translate(0, ${position})`
//     });
//
//     setTimeout(() => {
//         inScroll = false;
//         setActiveMenuItem(sectionEq);
//     }, 1300); // продолжительность анимации + 300ms - потому что закончится инерция
// };
//
// const scrollToSection = direction => {
//     const activeSection = sections.filter(".active");
//     const nextSection = activeSection.next();
//     const prevSection = activeSection.prev();
//
//     if (direction === "up" && prevSection.length) {
//         performTransition(prevSection.index());
//     }
//
//     if (direction === "down" && nextSection.length) {
//         performTransition(nextSection.index());
//     }
// };
//
// $(document).on({
//     wheel: e => {
//         const deltaY = e.originalEvent.deltaY;
//         const direction = deltaY > 0 ? "down" : "up";
//
//         scrollToSection(direction);
//     },
//     keydown: e => {
//         switch (e.keyCode) {
//             case 40:
//                 scrollToSection("down");
//                 break;
//
//             case 38:
//                 scrollToSection("up");
//                 break;
//         }
//     },
//     touchmove: e => e.preventDefault()
//
//     // touchstart touchend touchmove
// });
//
//
// $('[data-scroll-to]').on('click', e => {
//     e.preventDefault();
//
//     const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
//
//
//     performTransition(target);
//
// })
//
// if (isMobile) {
//     $(document).swipe({
//         swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
//             /**
//              * плагин возвращает фактическое...
//              * ...
//              */
//             const scrollDirection = direction === 'down' ? 'up' : 'down';
//
//             scrollToSection(scrollDirection);
//         }
//     });
// }


///// ------ПОЛНОЭКРАННОЕ МЕНЮ------

// function openMenu() {
//     const openBtn = document.querySelector('.hamburger-link');
//     const menu = $('.hamburger-popup');
//     const closeBtn = document.querySelector('.hamburger-popup__button');
//     // const wrapper = document.querySelector('.wrapper');
//
//
//     openBtn.addEventListener('click', function() {
//
//         menu.fadeIn();
//         menu.addClass('.display-section');
//         // menu.style.display = 'block';
//         // wrapper.style.overflow = 'hidden';
//     });
//
//     closeBtn.addEventListener('click', function () {
//         menu.fadeOut();
//         menu.removeClass('.display-section');
//         // menu.style.display = 'none';
//         // wrapper.style.overflow = 'visible';
//     });
//
// }
//
// openMenu();

$(document).ready(() => {
    const menu = $('.hamburger-popup');

    $('.hamburger-link').on('click', () => {
        menu.fadeIn(400);
        $('body').on('wheel.modal', () => {
            return false;
        })
    });

    $('.hamburger-popup__button, .hamburger-popup__link').on('click', () => {
        menu.fadeOut(400);
        $('body').off('wheel.modal')
    })
});



///// ------СЛАЙДЕР-КАРУСЕЛЬ------

$(document).ready(function() {

    const moveSlide = function(container, slideNum) {
        const items = container.find('.slider__item'),
                activeSlide = items.filter('.slider__item--active'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                list = container.find('.slider__list'),
                duration = 500;

        if (reqItem.length) {
            list.animate({
                'left': -reqIndex * 100 + '%'
            }, duration, function () {
                activeSlide.removeClass('slider__item--active');
                reqItem.addClass('slider__item--active');
            });
        }
    };

   $('.slider__arrow').on('click', function(e) {
       e.preventDefault();
       const $this = $(this),
            container = $this.closest('.slider__container'),
            items = container.find('.slider__item'),
            activeSlide = items.filter('.slider__item--active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev();

       if ($this.hasClass('slider__arrow--right')) {
           if(nextSlide.length){
               moveSlide(container, nextSlide.index());
           } else {
               moveSlide(container, items.first().index());
           }
       }

       if ($this.hasClass('slider__arrow--left')) {
           if(prevSlide.length){
               moveSlide(container, prevSlide.index());
           } else {
               moveSlide(container, items.last().index());
           }
       }
   });
});

/////------ингридиенты в слайдере------

$(document).ready(()=>{

    const compBtn = $('.slider__container--ingredients');
    const popupMenu = $('.slider__container--ingredients-popup');

    $(compBtn).on('click', e => {
        $(popupMenu).toggleClass('ingredients-popup__active');
        if (popupMenu.classList.contains('ingredients-popup__active')) {
                    compBtn.style.background = "#e45028"
                }

    })
});


///// ------АККОРДЕОН КОМАНДА------

$(document).ready(function() {
    $('.team__accordeon--name').click(function() {
        var team =$(this).closest('.team__accordeon--item');

        if(!team.hasClass('team__accordeon--item-active')) {
            $('.team__accordeon--container').slideUp();
            $('.team__accordeon--item').removeClass('team__accordeon--item-active');
            team.addClass('team__accordeon--item-active');
            team.find('.team__accordeon--container').slideDown();
        } else {
            $('.team__accordeon--container').slideUp();
            $(this).closest('.team__accordeon--item').removeClass('team__accordeon--item-active');

        }

    });
});

///// ------АККОРДЕОН МЕНЮ------

$(document).ready(function() { // DOMContentLoaded(function)
    $('.menu-item__title').click(function() {
        var menu=$(this).closest('.menu-item'); // this указывает на .menu-item__title

        if(!menu.hasClass('menu-item__active')) {
            $('.menu-item__content').stop().animate({
                width: '0'
            }, 700);
            $('.menu-item').slideDown().removeClass('menu-item__active');

            menu.addClass('menu-item__active');

            menu.find('.menu-item__content').stop().animate({
                'width': "100%"
            }, 700);
        } else {
            $('.menu-item__content').stop().animate({
                width: '0'
            }, 700);
            $(this).closest('.menu-item').removeClass('menu-item__active');

        }

        return false;
    });
});




///// ------МОДАЛЬНОЕ ОКНО В ОТЗЫВАХ------

// function openReview() {
//     const openBtnRev = document.querySelector('.feeds__item--btn');
//     const feed = $('.feeds-popup');
//     const closeBtnRev = document.querySelector('.feeds-popup__button');
//     const wrapper = document.querySelector('.wrapper');
//
//     openBtnRev.addEventListener('click', function() {
//         feed.fadeIn();
//         feed.addClass('.display-section');
//         // menu.style.display = 'block';
//         wrapper.style.overflow = 'hidden';
//     });
//
//     closeBtnRev.addEventListener('click', function () {
//         feed.fadeOut();
//         feed.removeClass('.display-section');
//         // menu.style.display = 'none';
//         wrapper.style.overflow = 'visible';
//     });
// }
//
// openReview();

    const openBtnRev = $('.feeds__item--btn');
    const feed = $('.feeds-popup');
    const closeBtnRev = $('.feeds-popup__button');
    const wrapper = $('.wrapper');

$(document).ready(() => {
    $(openBtnRev).on('click', () => {
        feed.fadeIn();
        $('body').on('wheel.modal', () => {
            return false;
        })
    });

    $(closeBtnRev).on('click', () => {
        feed.fadeOut();
        $('body').off('wheel.modal')
    })

});



///// ------КАРТА------

ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.9681,
        longitude: 30.3159,
        hintContent: '<div class="map__hint">наб. реки Карповки, д. 7</div>',
        balloonContent: [
            '<div class="map__balloon">Бургерная на Карповке, д. 7, ' +
            'тел. (812) 333-0085 </div>'
        ]
    },
    {
        latitude: 59.8898,
        longitude: 30.3187,
        hintContent: '<div class="map__hint">Московский пр., д. 109</div>',
        balloonContent: [
            '<div class="map__balloon">Бургерная на Московском, д. 109, ' +
            'тел. (812) 333-0086 </div>'
        ]
    },
    {
        latitude: 59.9394,
        longitude: 30.3805,
        hintContent: '<div class="map__hint">пер. Дегтярный, д. 20</div>',
        balloonContent: [
            '<div class="map__balloon">Бургерная на Дегтярном, д. 20, ' +
            'тел. (812) 333-0087 </div>'
        ]
    },
    {
        latitude: 59.9455,
        longitude: 30.4823,
        hintContent: '<div class="map__hint">пр. Косыгина, д. 24</div>',
        balloonContent: [
            '<div class="map__balloon">Бургерная на Косыгина, д. 24, ' +
            'тел. (812) 333-0088 </div>'
        ]
    }

];
var geoObjects = [];

function init() {
    var map = new ymaps.Map('map',{
        center: [59.93, 30.33],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++){
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent
            },
            {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
            href: 'img/icons/map-marker.svg',
            size: [46, 57],
            offset: [-25, -50]
        }],
        clusterIconContentLayout: null

    });
    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}