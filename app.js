
const grocery = document.querySelector("#grocery");
const div = document.querySelector("div");

grocery.addEventListener("keypress", function(event) {
	if (event.key==="Enter") {
		console.log(this.value);
		const p = document.createElement("p");
		p.innerText = this.value;
		div.append(p);
		this.value = "";
		}
	})


	