$(document).ready(function(){
	$('.header-carousel').owlCarousel({
	    loop:true,
	    nav:true,
	    items:1
	})

	$('.accordion-header').on('click', function(){
		if(!$(this).find('.accordion-header__text').hasClass('active')) {
			
			$('.accordion-header').next().slideUp()  //подинимаем текст у все аккордионов
			$('.accordion-header__text').removeClass('active') //удаляем красный цвет у текста в хедере аккордиона
			$('.accordion-header__minus').removeClass('accordion-header__minus') //удаляем минус
		

			$(this).find('.accordion-header__plus').addClass('accordion-header__minus')
			$(this).find('.accordion-header__text').addClass('active')
			$(this).next().slideDown()

		}
	});

	$('.product-property').on('click', function() {
		$('.product-property.active').removeClass('active');
		$(this).addClass('active')
	})

	
	$('.review-carousel').owlCarousel({
	    loop:true,
	    nav:false,
	    items:1,
	})

	$('.twit-slider').owlCarousel({
	    loop:true,
	    nav:false,
	    items:1,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplayHoverPause:true
	})


	$('.portfolio__type').on('click', function(){
		$('.portfolio__type.active').removeClass('active')
		$(this).addClass('active')
	})


})