var fgh = document.querySelector(".page-header__wrap");

var btn = document.createElement('button');
btn.classList.add('page-header__submit');
btn.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
btn.innerHTML += '<span class="page-header__toggle"></span>';
fgh.appendChild(btn);

fgh.classList.remove("page-header__wrap--show");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  this.classList.toggle("page-header__submit--active");
  fgh.classList.toggle("page-header__wrap--show");
});


/*function startMap() {
  ymaps.ready(init);
  var myMap;
  function init(){
      myMap = new ymaps.Map("map", {
          center: [59.93842491432188,30.28889067748228],
          zoom: 11,
          controls: []
      });
      myMap.behaviors.disable('scrollZoom');
      var coords = [
  [60,30.2], [60.01253856408209, 30], [60.000000132, 30.4],[59.89,30.3]
],
  myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
      iconImageHref: 'icons/map-marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-16, -42]
  });
for (var i = 0; i < coords.length; i++) {
  myCollection.add(new ymaps.Placemark(coords[i]));
}
myMap.geoObjects.add(myCollection);
// При клике на карту все метки будут удалены.
myCollection.getMap().events.add('click', function() {
  myCollection.removeAll();
});
  }
}
startMap();*/


// var myMap;

// ymaps.ready(init);

// function init () {
//   myMap = new ymaps.Map("map", {
//     center: [59.938649906262164,30.323049135581975],
//     zoom: 17,
//     controls: [],
//     behaviors: ["drag"]
//   }),

//   myMap.controls.add(
//     new ymaps.control.ZoomControl()
//   );

//   var myPlacemark = new  ymaps.Placemark(
//     [59.938649906262164,30.323049135581975]);

//   myMap.geoObjects.add(myPlacemark),
//   myMap.controls.add("ZoomControl");
// }


//слайдер

// var tog = document.querySelectorAll('.slider__toggle');
// var boxTog = document.querySelector('.slider__toggles');

// boxTog.onclick = function(event) {
//   if(event.target) {

//   }
//   for(var i = 0 ; i < tog.length; i++) {
//     if(tog[i].classList.contains('slider__toggle--active')) {
//       tog[i].classList.remove('slider__toggle--active');
//     } else {

//     }
//   }
// }
