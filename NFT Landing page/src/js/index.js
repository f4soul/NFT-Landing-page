import Swiper from 'swiper/bundle';
import {
	Navigation,
	FreeMode,
	Keyboard
} from 'swiper/modules';

import burger from './modules/burger';
import AOS from 'aos';
//import mobileNav from './modules/mobile-nav';
//mobileNav();

const swiper = () => {
	new Swiper('.auctions-slider', {
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1' // Включить стрелочки
		},
		modules: [Navigation, FreeMode, Keyboard], // Модули которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 3, // Количество слайдов которые будут видны,
		spaceBetween: 15,
		keyboard: true,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			},
			0: { // Настройки для разрешения менее 600px
				slidesPerView: 1
			}
		}
	});
}

const swiper2 = () => {
	new Swiper('.popular-slider', {
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2' // Включить стрелочки
		},
		modules: [Navigation, FreeMode, Keyboard], // Модули которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 3, // Количество слайдов которые будут видны,
		spaceBetween: 15,
		keyboard: true,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			},
			0: { // Настройки для разрешения менее 600px
				slidesPerView: 1
			}
		}
	});
}

const swiper3 = () => {
	new Swiper('.categories-slider', {
		navigation: {
			nextEl: '.swiper-button-next3',
			prevEl: '.swiper-button-prev3' // Включить стрелочки
		},
		modules: [Navigation, FreeMode, Keyboard], // Модули которые будут использоваться
		autoHeight: true, // Автовысота
		speed: 500, // Скорость прокрутки слайдера
		slidesPerView: 3, // Количество слайдов которые будут видны,
		spaceBetween: 15,
		keyboard: true,
		freeMode: true,
		grabCursor: true,
		breakpoints: {
			1300: {
				spaceBetween: 42
			},
			1100: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			},
			0: { // Настройки для разрешения менее 600px
				slidesPerView: 1
			}
		}
	});
}

function detectDevice() {
	if (window.innerWidth <= 600) {
		for (let i = 0; i <= 2; i++) {
			document.querySelectorAll('.auctions-slide')[i].style.display = 'block';
			document.querySelectorAll('.popular-slide')[i].style.display = 'block';
			document.querySelectorAll('.categories-slide')[i].style.display = 'block';
		}
	} else {
		swiper();
		swiper2();
		swiper3();
	}
}

detectDevice();