$(document).ready(function () {
  var currentFloor =2; // переменная, где хранится текуший этаж
  var floorPath = $(".home_image path"); // каждый отдельный этаж в SVG 
  var counterUp = $(".counter_up"); /* кнопка увеличения этажа */
  var counterDown = $(".counter_down"); /* кнопка уменшение этажа */

  // функция при наведении мышью на этаж  
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current_floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текушего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  counterUp.on("click", function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значения этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current_floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current_floor"); //подсвечиваем текуший этаж
    }
  });

   counterDown.on("click", function () {
    if (currentFloor > 2) { // проверяем значения этажа, оно не должно быть меньше 2
      currentFloor--; // отнимаем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); // форматируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("current_floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current_floor"); //подсвечиваем текуший этаж
    }
   })
});