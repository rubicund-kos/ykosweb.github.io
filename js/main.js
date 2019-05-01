$(document).ready(function () {

	//wow.js
	new WOW().init();

	//Плавная прокрутка по якорям
	$('.navbar__menu a').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500); 
	})

	//code for burger menu
	var burger = document.getElementById("burger");
	var navbar = document.getElementById("navbar");
	burger.addEventListener("click", adaptiveMenu);

	function adaptiveMenu(event) {
		event.preventDefault();
		burger.classList.toggle("burger--active");
		navbar.classList.toggle("navbar-active");
	}

	//code for animations of numbers
	function countup(className) {
		var countBlockTop = $("." + className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;

		$(window).scroll(function () {
			if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
				show = false;

				$('.' + className).spincrement({
					from: 1,
					duration: 4000,
				});
			}
		})
	}

	$(function () {
		countup("numbers", $(".numbers").text());
	});





	//code for slick slider
	$(function () {
		$('.text_slider').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});
	});

	//code for form validate
	window.addEventListener("load", init);

	function init() {
		//Перебираем все формы на сайте
		for(var i=0; i<document.forms.length; i++) {
			var form = document.forms[i];
			
			var formValidation = false;
			
			//Перебираем все элементы форм
			for(var j=0; j<form.elements.length; j++) {
				var element = form.elements[j];
				
				//Если текущий элемент не текстовый, перейдем к следующему.
				if (element.type != "text") {
					continue;
				}

				//Проверяем есть ли регулярное выражение для валидации текущего input
				var regExp = element.dataset.val;
				if (regExp) {
					element.onchange = validateInput;
					formValidation = true;
				}
			}
			if(formValidation) {
				form.onsubmit = validateForm;
			}
		}
	}

	//обработчик на onchange input
	function validateInput() {
		var regExp = this.dataset.val,
			msg = this.dataset.valMsg,
			msgId  = this.dataset.valMsgId,
			value  = this.value;
		var res = value.search(regExp);
		if(res == -1) {
			document.getElementById(msgId).innerHTML = msg;
			this.className = "error";
		}
		else {
			document.getElementById(msgId).innerHTML = "";
			this.className = "valid";
		}

	}

	function validateForm() {
		var invalid = false;

		for(var i=0; i<this.elements.length; i++) {
			var element = this.elements[i];
			if(element.type == "text" && element.onchange != null) {
				element.onchange();
				if (element.className == "error") invalid = true;
			}
		}

		if (invalid) {
			alert("Допущена ошибка при заполении формы.");
			return false;
		}
	}
	

	/* code for animations of charts

		function animateCharts(charts) {
			var elem = document.getElementsByClassName(charts)[0];
			var widthElem = parseInt(getComputedStyle(elem).width);
			elem.style.width = 0 + "px";

			var width = 0;
			var animateWidth =setInterval(function() {
				elem.style.width = width + "px";
				width += 3;
				if (width > widthElem) {
					clearInterval(animateWidth);
				}
			}, 20);

			
		}
		animateCharts("charts_75");
		animateCharts("charts_90");
		animateCharts("charts_65");
	*/

});