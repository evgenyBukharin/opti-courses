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
