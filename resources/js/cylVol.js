// cylVol.js - calulcate the volume of a cylinder

function calc_vol() {

	var radius = document.getElementById("radius").value;
	var height = document.getElementById("height").value;
	var out = document.getElementById("volume");
	volume.value = Math.PI*radius*radius*height;


}
