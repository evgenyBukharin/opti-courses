import Swiper, { Autoplay } from "swiper";
Swiper.use([Autoplay]);

const swiper = new Swiper(".swiper", {
	slidesPerView: 4,
	// spaceBetween: 10,
});
