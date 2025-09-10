document.addEventListener("DOMContentLoaded", () => {
	
	const projectsSlider = new Swiper(".projects-slider", {
		slidesPerView: 4,
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		navigation: {
			nextEl: '.projects-slider .slider__next',
			prevEl: '.projects-slider .slider__prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		spaceBetween: 20,
		breakpoints: {
		   0: {
			   slidesPerView: 1,
		   },
		   577: {
			   slidesPerView: 5,
		   },
		   991: {
			   slidesPerView: 4,
		   }
		}
	});

	const reviewsSlider = new Swiper(".reviews-slider", {
		slidesPerView: 2,
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.reviews-slider .slider__next',
			prevEl: '.reviews-slider .slider__prev',
		},
		pagination: {
			el: '.reviews-slider .slider__pagination',
			clickable: true,
			type: 'bullets',
		},
		spaceBetween: 0,
		breakpoints: {
		   0: {
			   slidesPerView: 1,
		   },
		   577: {
			   slidesPerView: 1,
		   },
		   991: {
			   slidesPerView: 2,
		   }
		}
	});
	
	Fancybox.bind("[data-fancybox]", {
		
	});

	const tabButtons = document.querySelectorAll('.tab-item');
	const tabContents = document.querySelectorAll('.tab-content');

	tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Убираем active со всех кнопок и контента
		tabButtons.forEach(btn => btn.classList.remove('active'));
		tabContents.forEach(content => content.classList.remove('active'));

		// Добавляем active на нажатую кнопку и соответствующий контент
		button.classList.add('active');
		const tabNumber = button.getAttribute('data-tab');
		document.querySelector(`.tab-content[data-tab="${tabNumber}"]`).classList.add('active');
	});
	});
	
	/* burger */
	
	const burgerButton = document.getElementById('burger');
		
	const menu = document.querySelector('.mobile-menu');
	const overlay = document.querySelector('.overlay');
	const buttonClose = document.querySelector('.close');
	const body = document.querySelector('body');

	function addMenu() {
		menu.classList.add('active');
		overlay.classList.add('active');
		body.classList.add('fixed');
	}
	
	function removeMenu() {
		menu.classList.remove('active');
		overlay.classList.remove('active');
		body.classList.remove('fixed');
	}

	burgerButton.addEventListener('click', function(event) {
		event.preventDefault();
		addMenu();
	});

	buttonClose.addEventListener('click', function(event) {
		event.preventDefault();
		removeMenu();
	});

	document.addEventListener('click', (event) => {
		if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
			removeMenu();
		}
	});

	const phoneInputs = document.querySelectorAll('input[autocomplete="tel"]');

	phoneInputs.forEach((input) => {
		Inputmask({ mask: "+7 (999) 999-9999", clearIncomplete: true }).mask(input);
	});
});