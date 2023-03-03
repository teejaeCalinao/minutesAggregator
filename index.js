let minsInput = document.getElementById("minsInput");
let minsForm = document.getElementById("minsForm");
let aggregate = document.getElementById("aggregate");


minsForm.addEventListener("submit",(e)=>{

	e.preventDefault();

	let rawMins = minsInput.value;
	let minsArr = rawMins.split(" ").map(item => {

		if(item === "hour"){
			return 60
		} else {
			return parseInt(item)
		}

	}).filter(item => {
		
		console.log(item);
		if(item > 1){
			return true
		} else {
			return false
		}
		

	});

	let sum = minsArr.reduce((x,y) => x + y);

	aggregate.innerHTML = sum + " mins"

});