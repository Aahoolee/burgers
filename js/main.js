function openMenu() {
    const openBtn = document.querySelector('.hamburger-link');
    const menu = $('.hamburger-popup');
    const wrapper = document.querySelector('.wrapper');

    openBtn.addEventListener('click', function() {
        menu.fadeIn();
        menu.addClass('.display-section');
        // menu.style.display = 'block';
        wrapper.style.overflow = 'hidden';
    });

    const closeBtn = document.querySelector('.hamburger-popup__button');

    closeBtn.addEventListener('click', function () {
        menu.fadeOut();
        menu.removeClass('.display-section');
        // menu.style.display = 'none';
    });
}

openMenu();


////// карта

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