const persentage = document.querySelector(".module-grades__persentage");
const values = document.querySelectorAll(".module-grades__value");
console.log(values);
if (persentage !== null && values !== null) {
	const minHeight = persentage.scrollHeight / values.length;
	for (let i = 0; i < values.length; i++) {
		j = i + 1;
		values[i].style.height = minHeight * j + "px";
	}
}

const mediaQuery390 = window.matchMedia("(max-width: 390px)");
const mediaQuery480 = window.matchMedia("(max-width: 480px)");
const mediaQuery768 = window.matchMedia("(max-width: 768px)");

alert(
	`Ширина окна: ${window.innerWidth}px,\nМедиа запрос 390: ${mediaQuery390.matches},\nМедиа запрос 480: ${mediaQuery480.matches},\nМедиа запрос 768: ${mediaQuery768.matches}`
);
