var winter = ["December", "January", "February"] ;
var spring = ["March", "April", "May"];
var summer = ["June", "July", "August"];
var fall = ["September", "October", "November"];

var winterImages = [ "https://i.pinimg.com/736x/9e/26/39/9e2639cbbff91dd9287a3a67920a8875.jpg",
	"https://i.pinimg.com/1200x/0f/5f/4d/0f5f4daa18a77ba07468f270320d3c08.jpg",
	"https://i.pinimg.com/736x/89/33/da/8933da4c9ff71ebcaef1c9ad90e3feb2.jpg"
];
var springImages = ["https://i.pinimg.com/1200x/62/54/a8/6254a8fc448474add6bbbf2539ae1282.jpg",
	"https://i.pinimg.com/1200x/dd/83/02/dd830200870a76cc1bb751885c9a01de.jpg",
	"https://i.pinimg.com/736x/ed/c9/dc/edc9dca98757935c1b9c0063dfdb9a26.jpg"];
var summerImages = ["https://i.pinimg.com/1200x/38/72/19/3872190939ec3ad73196622524307b39.jpg",
	"https://i.pinimg.com/736x/14/5b/cf/145bcf5a5b163e69b27d44ea93ba26c4.jpg",
	"https://i.pinimg.com/736x/fb/d1/81/fbd181eac9460c4f3aa175c8392961ab.jpg"
];
var fallImages = ["https://i.pinimg.com/1200x/c0/de/61/c0de6134b28b33595984fe1f1c5d8aa0.jpg",
	"https://i.pinimg.com/1200x/00/cb/a3/00cba362ae89c2863ffe58d01c22104b.jpg",
	"https://i.pinimg.com/1200x/11/87/23/1187231d1be5fd24dab21c563906439c.jpg"
];



function displayWinter() {
	const container = document.querySelector(".winter");
	container.innerHTML="";

	for (let i = 0; i < winter.length; i++) {
		container.insertAdjacentHTML("beforeend", `
			<div class="col-md-4">
			  <div class="month-card">
			    <img src="${winterImages[i]}" />
				<div class="month-card-body">
				  <h5>${winter[i]}</h5>
			    </div>
	     	  </div>
		    </div>
		   `);
	}

}



function displaySpring() {
	const container = document.querySelector(".spring");
	container.innerHTML="";

	spring.forEach((month, index) => {
		container.insertAdjacentHTML("beforeend", `
			<div class="col-md-4">
			  <div class="month-card">
			    <img src="${springImages[index]}" />
				<div class="month-card-body">
				  <h5>${month}</h5>
			    </div>
	     	  </div>
		    </div>
		   `);
	});

}



function displaySummer() {
	const container = document.querySelector(".summer");
	container.innerHTML="";

	for (let i = 0; i < summer.length; i++) {
		container.insertAdjacentHTML("beforeend", `
			<div class="col-md-4">
			  <div class="month-card">
			    <img src="${summerImages[i]}" />
				<div class="month-card-body">
				  <h5>${summer[i]}</h5>
			    </div>
	     	  </div>
		    </div>
		   `);
	}

}

function displayFall() {
	const container = document.querySelector(".fall");
	container.innerHTML="";

	fall.forEach((month, index) => {
		container.insertAdjacentHTML("beforeend", `
			<div class="col-md-4">
			  <div class="month-card">
			    <img src="${fallImages[index]}" />
				<div class="month-card-body">
				  <h5>${month}</h5>
			    </div>
	     	  </div>
		    </div>
		   `);
	});

}


function displayAllSeasons() {
	displayWinter();
	displaySpring();
	displaySummer();
	displayFall();
}

displayAllSeasons();
