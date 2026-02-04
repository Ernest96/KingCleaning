//Hook up the tweet display

$(document).ready(function () {

	$(".countdown").countdown({
		date: "8 July 2048 18:30:00",
		format: "on"
	},

		function () {
			// callback function
		});

});

function data() {
	var div;
	var date = new Date();
	var an, luna, zi;
	var text;

	an = date.getFullYear();
	luna = date.getMonth() + 1;
	zi = date.getDate();
	text = zi + "." + luna + "." + an;

	div = document.getElementById("data");
	if (div) {
		div.innerHTML = "  ®Copyright" + " " + "King-Cleaning" + " " + an;
	}
}

data(); 