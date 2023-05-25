const items = document.querySelectorAll(".course__item-contents");
if (items !== null) {
	let activeItem = document.querySelector(".course__item-contents-active");
	items.forEach((item) => {
		item.addEventListener("click", () => {
			activeItem.classList.remove("course__item-contents-active");
			item.classList.add("course__item-contents-active");
			activeItem = item;
		});
	});
}
