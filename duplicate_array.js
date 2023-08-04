let arr = ["nidhi", "divya", "shreya",
		"divya", "rudra", "nidhi"];

function removeDuplicates(arr) {
	return arr.filter((item,index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));
