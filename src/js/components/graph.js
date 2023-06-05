const persentages = document.querySelectorAll(".module-grades__persentage");
const values = document.querySelectorAll(".module-grades__value");
if (persentages !== null && values !== null) {
	const height = persentages[0].scrollHeight;
	persentages.forEach((elem, idx) => {
		let dataCoef = elem.getAttribute("data-coef").replace(/,/, ".");
		if (dataCoef == 1) {
			values[idx].style.height = height + "px";
		} else {
			values[idx].style.height = height * dataCoef - 10 + "px";
		}
	});
}
