function openMenu() {
    const btn = document.querySelector('.hamburger-link');
    const menu = document.querySelector('.hamburger');

    btn.addEventListener('click', function() {
        menu.addClass('.hamburger-popup');
        menu.fadeIn();

    })

}

openMenu();

//////
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map',{
        center: [59.94, 30.32],
        zoom: 11,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([59.97, 30.31], {
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19 </div>',
        balloonContent: [
            '<div class="map__balloon">Бургерная на ул. Литераторов, д. 19, ' +
            'тел. (812) 333-0085 </div>'
        ]
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46, 57]
    });

    var placemark1 = new ymaps.Placemark([59.88, 30.31], {
            hintContent: '<div class="map__hint">Московский пр., д. 109 </div>',
            balloonContent: [
                '<div class="map__balloon">Бургерная на Московском, 109, ' +
                'тел. (812) 333-0086 </div>'
            ]
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 57]
        });

    var placemark2 = new ymaps.Placemark([59.9394, 30.3805], {
            hintContent: '<div class="map__hint">пер. Дегтярный, д. 20 </div>',
            balloonContent: [
                '<div class="map__balloon">Бургерная на Дегтярном пер., д. 20, ' +
                'тел. (812) 333-0087 </div>'
            ]
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 57]
        });

    var placemark3 = new ymaps.Placemark([59.941, 30.49], {
            hintContent: '<div class="map__hint">ул. Наставников, д. 11, к.1 </div>',
            balloonContent: [
                '<div class="map__balloon">Бургерная на Наставников, д. 11, к. 1, ' +
                'тел. (812) 333-0088 </div>'
            ]
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 57]
        });


    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);



}