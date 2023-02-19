import Swiper, { Navigation, Autoplay, Pagination } from 'swiper';

function swiperInit() {
	Swiper.use([Navigation, Autoplay, Pagination]);

	new Swiper('.js-brands-slider', {
		direction: 'horizontal',
		slidesPerView: 2,
		loop: true,
		speed: 4000,
		autoplay: {
		  delay: 1,
		},
		slidesPerView:'auto',
		allowTouchMove: false,
		disableOnInteraction: true,
		breakpoints: {
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 5,
				loop: true,
				autoplay: {
					enabled: true,
				}

			},
			1200: {
				slidesPerView: 7,
				loop: false,
				autoplay: {
					enabled: false,
				}

			},
		},
	});

	document.querySelectorAll('.js-swiper-image').forEach((holder) => {
		const swiper = holder.querySelector('.swiper');
		const nextEl = holder.querySelector('.swiper-button-next');
		const prevEl = holder.querySelector('.swiper-button-prev');

		if (!swiper) return;

		new Swiper(swiper, {
			direction: 'horizontal',
			slidesPerView: 1,
			spaceBetween: 14,
			pagination: {
                el: '.js-swiper-pagination',
                clickable: true,
            },
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
			navigation: {
				nextEl: nextEl,
				prevEl: prevEl,
			},
		});
	});
}

export default swiperInit;
