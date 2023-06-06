const borderContainerList = document.querySelector(".module-system__grades");
const borderContainerItems = document.querySelectorAll(".module-system__grade");
const borderContainerAfter = document.querySelector(".module-system__grades-after");
const borderContainerBefore = document.querySelector(".module-system__grades-before");
const gradesList = {
	INTERN: 1,
	BEGINNER: 2,
	JUNIOR: 3,
	MIDDLE: 4,
	"MIDDLE+": 5,
	SENIOR: 6,
};
if (borderContainerList !== null && borderContainerAfter !== null && borderContainerBefore !== null) {
	const gradeItems = borderContainerList.querySelectorAll(".module-system__grade");
	const gap = 20;
	const gradeItemWidth = gradeItems[0].offsetWidth;

	wholeItemsWidth = gradeItems.length * gradeItemWidth;
	wholeGapWidth = gradeItems.length * gap - gap;

	calculatedWidth = wholeItemsWidth + wholeGapWidth;

	borderContainerAfter.style.width = calculatedWidth + "px";
	borderContainerAfter.style.height = borderContainerList.offsetHeight - 1 + "px";

	let currentGrade = borderContainerList.getAttribute("data-grade");
	borderContainerBefore.style.width =
		gradeItemWidth * gradesList[currentGrade] + gradesList[currentGrade] * gap - gap / 2 + "px";
	borderContainerBefore.style.height = borderContainerList.offsetHeight - 1 + "px";

	for (let i = 0; i < gradesList[currentGrade]; i++) {
		borderContainerItems[i].classList.add("module-system__grade-filled");
	}
}
