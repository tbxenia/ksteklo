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
		pagination: {
			el: '.projects-slider .slider__pagination',
			clickable: true,
			type: 'bullets',
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

	const productsSlider = new Swiper(".products-slider", {
		slidesPerView: 4,
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		navigation: {
			nextEl: '.products-slider .slider__next',
			prevEl: '.products-slider .slider__prev',
		},
		pagination: {
			el: '.products-slider .slider__pagination',
			clickable: true,
			type: 'bullets',
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
		   480: {
			   slidesPerView: 2,
		   },
		   767: {
			   slidesPerView: 3,
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

	const list = document.getElementById('tags');

	if(list) {
		const ninthItem = list.children[7];

		const button = document.createElement('div');
		button.textContent = 'Показать все!';
		button.className = 'category__list-item show__more';

		if (ninthItem) {
		ninthItem.parentNode.insertBefore(button, ninthItem.nextSibling);
		} else {
		console.warn('war');
		}
		
		function hideElementsAfterDiv(divId) {
			const div = document.querySelector(divId);
			
			if (div) {
				let nextSibling = div.nextElementSibling;
				while (nextSibling) {
					nextSibling.style.display = 'none';
					nextSibling = nextSibling.nextElementSibling;
				}
			}
		}
		hideElementsAfterDiv('.show__more');
		
		document.querySelector('.show__more').addEventListener('click', function () {
			let tagsElements = document.querySelectorAll('.category__list ul li');
			
			tagsElements.forEach((element) => {
				element.style.display = 'block';
			});
			
			document.querySelector('.show__more').remove();
		});
	}
});

document.addEventListener( 'DOMContentLoaded', function () {
var main = new Splide( '#main-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#thumbnail-slider', {
    fixedWidth  : 146,
    fixedHeight : 146,
    gap         : 15,
    rewind      : true,
    pagination  : false,
    cover       : true,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 130,
        fixedHeight: 130,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );