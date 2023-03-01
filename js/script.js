$(function () {
   
    $("[data-toggle=modal]").on('click', (e) => {
        e.preventDefault();
        $('.overlay').show();
    });
    $('.modal__close').on('click', (e) => {
        e.preventDefault();
        $('.overlay').hide();
    });
    $('.brands__item').on('click', (e) => {
      e.preventDefault();
     });

     $('.dudes__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
      responsive: [
        {
          breakpoint: 1024,
        },
        {
          breakpoint: 780,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $("a.topLink").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
 });
 function screen() {
  let _w = window.innerWidth;
  let _h = window.innerHeight;

  document.getElementById("width").innerHTML = _w;
  document.getElementById("height").innerHTML = _h;

  requestAnimationFrame(screen);
}

requestAnimationFrame(screen);

window.addEventListener("resize", screen);
window.addEventListener("load", screen);

    
});


// Находим форму и блок "thankyou"
var form = document.querySelector("form");
var thankyou = document.getElementById("thankyou");
var overlay1 = document.querySelector('.overlay1');

// Обрабатываем отправку формы
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Отправляем данные формы на сервер
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "mail.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      // Если ответ получен, обрабатываем его
      var response = JSON.parse(xhr.responseText);
      if (response.status === "success") {
        // Если отправка прошла успешно, показываем блок "thankyou"
        thankyou.style.display = "block";
        overlay1.style.display = "block";
        // Скрываем блок через 2 секунды
        setTimeout(function() {
          thankyou.style.display = "none";
          overlay1.style.display = "none";
          // Перенаправляем пользователя на страницу index.html
          window.location.href = "index.html";
        }, 2000);
      } else {
        // Если произошла ошибка при отправке, показываем сообщение с ошибкой
        alert(response.message);
      }
    }
  };
  xhr.send("name=" + encodeURIComponent(form.name.value) + "&phone=" + encodeURIComponent(form.phone.value));
});
