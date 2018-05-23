///// ПОЛНОЭКРАННОЕ МЕНЮ

function openMenu() {
    const openBtn = document.querySelector('.hamburger-link');
    const menu = $('.hamburger-popup');
    const closeBtn = document.querySelector('.hamburger-popup__button');
    const wrapper = document.querySelector('.wrapper');

    openBtn.addEventListener('click', function() {
        menu.fadeIn();
        menu.addClass('.display-section');
        // menu.style.display = 'block';
        wrapper.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function () {
        menu.fadeOut();
        menu.removeClass('.display-section');
        // menu.style.display = 'none';
        wrapper.style.overflow = 'visible';
    });
}

openMenu();

///// СЛАЙДЕР-КАРУСЕЛЬ

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items:2,
//         lazyLoad:true,
//         loop:true,
//         margin:10
//     });
// });

$(document).ready(function() {

    const moveSlide = function(container, slideNum) {
        const items = container.find('.slider__item'),
                activeSlide = items.filter('.slider__item--active'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                list = container.find('slider__list'),
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
           console.log(nextSlide);

       }

       if ($this.hasClass('slider__arrow--left')) {
           if(prevSlide.length){
               moveSlide(container, prevSlide.index());
           } else {
               moveSlide(container, items.last().index());
           }
           console.log('hello left');

       }

   });

});


///// АККОРДЕОН КОМАНДА

// function openPosition() {
//     // $('.team__accordeon--item').click(function () {
//     //
//     // })
//     const openPos = document.querySelector('.team__accordeon--item');
//     const active = $('team__accordeon--item-active');
//
//     openPos.addEventListener('click', function(){
//         active.slideDown();
//         active.addClass('.team__accordeon--item-active');
//
//     });
//     const closePos = document.querySelector('.team__accordeon--item-active');
//
//     closePos.addEventListener('click', function () {
//         active.slideUp();
//         active.removeClass('.team__accordeon--item-active');
//     });
// }
//
// openPosition();

$(document).ready(function() {
    $('.team__accordeon--name').click(function() {
        var team =$(this).parent('.team__accordeon--item');

        if(!team.hasClass('team__accordeon--item-active')) {
            $('.team__accordeon--container').slideUp(400);
            $('.team__accordeon--item').removeClass('team__accordeon--item-active');
            team.addClass('team__accordeon--item-active');
            team.children('.team__accordeon--container').slideDown(400);
        } else {
            $(this).parent('.team__accordeon--item').removeClass('team__accordeon--item-active');
        }

        return false;
    });
});

// $(document).ready(function() {
//     $('.team__accordeon--name').click(function() {
//         var team =$(this).parent('.team__accordeon--item');
//
//         if(!team.hasClass('team__accordeon--item-active')) {
//             $('.team__accordeon--container').slideUp(400);
//             $('.team__accordeon--item').removeClass('team__accordeon--item-active');
//             team.addClass('team__accordeon--item-active');
//             team.children('.team__accordeon--container').slideDown(400);
//         } else {
//             $(this).parent('.team__accordeon--item').removeClass('team__accordeon--item-active');
//         }
//
//         return false;
//     });
// });


///// АККОРДЕОН МЕНЮ

$(document).ready(function() { // DOMContentLoaded(function)
    $('.menu-item__title').click(function() {
        var menu=$(this).parent('.menu-item'); // this указывает на .menu-item__title

        if(!menu.hasClass('active')) {
            $('.menu-item__content').hide();
            $('.menu-item').removeClass('active');
            menu.addClass('active');
            menu.children('.menu-item__content').show();
        } else {
            $(this).parent('.menu-item').removeClass('active');
        }

        return false;
    });
});


///// МОДАЛЬНОЕ ОКНО В ОТЗЫВАХ

function openReview() {
    const openBtnRev = document.querySelector('.feeds__item--btn');
    const feed = $('.feeds-popup');
    const closeBtnRev = document.querySelector('.feeds-popup__button');
    const wrapper = document.querySelector('.wrapper');

    openBtnRev.addEventListener('click', function() {
        feed.fadeIn();
        feed.addClass('.display-section');
        // menu.style.display = 'block';
        wrapper.style.overflow = 'hidden';
    });

    closeBtnRev.addEventListener('click', function () {
        feed.fadeOut();
        feed.removeClass('.display-section');
        // menu.style.display = 'none';
        wrapper.style.overflow = 'visible';
    });
}

openReview();


///// КАРТА

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

    // var placemark = new ymaps.Placemark([59.97, 30.31], {
    //     hintContent: '<div class="map__hint">ул. Литераторов, д. 19 </div>',
    //     balloonContent: [
    //         '<div class="map__balloon">Бургерная на ул. Литераторов, д. 19, ' +
    //         'тел. (812) 333-0085 </div>'
    //     ]
    // },
    // {
    //     iconLayout: 'default#image',
    //     iconImageHref: 'img/icons/map-marker.svg',
    //     iconImageSize: [46, 57]
    // });
    //
    // var placemark1 = new ymaps.Placemark([59.88, 30.31], {
    //         hintContent: '<div class="map__hint">Московский пр., д. 109 </div>',
    //         balloonContent: [
    //             '<div class="map__balloon">Бургерная на Московском, 109, ' +
    //             'тел. (812) 333-0086 </div>'
    //         ]
    //     },
    //     {
    //         iconLayout: 'default#image',
    //         iconImageHref: 'img/icons/map-marker.svg',
    //         iconImageSize: [46, 57]
    //     });
    //
    // var placemark2 = new ymaps.Placemark([59.9394, 30.3805], {
    //         hintContent: '<div class="map__hint">пер. Дегтярный, д. 20 </div>',
    //         balloonContent: [
    //             '<div class="map__balloon">Бургерная на Дегтярном пер., д. 20, ' +
    //             'тел. (812) 333-0087 </div>'
    //         ]
    //     },
    //     {
    //         iconLayout: 'default#image',
    //         iconImageHref: 'img/icons/map-marker.svg',
    //         iconImageSize: [46, 57]
    //     });
    //
    // var placemark3 = new ymaps.Placemark([59.941, 30.49], {
    //         hintContent: '<div class="map__hint">ул. Наставников, д. 11, к.1 </div>',
    //         balloonContent: [
    //             '<div class="map__balloon">Бургерная на Наставников, д. 11, к. 1, ' +
    //             'тел. (812) 333-0088 </div>'
    //         ]
    //     },
    //     {
    //         iconLayout: 'default#image',
    //         iconImageHref: 'img/icons/map-marker.svg',
    //         iconImageSize: [46, 57]
    //     });
    //
    //
    // map.geoObjects.add(placemark);
    // map.geoObjects.add(placemark1);
    // map.geoObjects.add(placemark2);
    // map.geoObjects.add(placemark3);



}