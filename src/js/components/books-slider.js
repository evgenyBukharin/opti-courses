import Swiper, { Autoplay } from "swiper";
Swiper.use([Autoplay]);
const swiperContainer = document.querySelector(".module-books-slider__slider");

const swiper = new Swiper(swiperContainer, {
	slidesPerView: 4,
	spaceBetween: 50,
	watchSlidesProgress: true,
	slideVisibleClass: "module-books-slider__slide-visible",
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
	on: {
		afterInit: () => {
			const slides = swiperContainer.querySelectorAll(".swiper-slide");
			const maxIndexSpan = document.querySelector(".module-books-slider__maxindex");
			maxIndexSpan.innerHTML = slides.length;
		},
	},
});
