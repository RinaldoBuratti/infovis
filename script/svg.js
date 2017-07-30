/**
 * creates and sets the svg
 */

var vmDataset = ["vm0", "vm1","vm2","vm3", "vm4","vm5","vm6", "vm7"];

var windowsDimensions = {x: window.innerWidth, y: window.innerHeight};

console.log(windowsDimensions);

var svg = d3.select("body")
	.append("svg")
	.attr("width", windowsDimensions.x)
	.attr("height", windowsDimensions.y);

var dispositionRadius = innerHeight/3;

var circumference = 2 * Math.PI * dispositionRadius;
var tempMachineRadius = (circumference/vmDataset.length)/2;
var machineRadius = tempMachineRadius - (tempMachineRadius/4);

if(machineRadius > dispositionRadius/2)
	machineRadius = dispositionRadius/2;

var distanceAngle = (2 * Math.PI)/vmDataset.length;

console.log(dispositionRadius);
for(i = 0; i < vmDataset.length; i++) {

	var machine = svg.append("circle")
		.attr("r", machineRadius)
		.attr("cx", (windowsDimensions.x/2))
		.attr("cy", windowsDimensions.y/2)
		.attr("class", "virtualMachine")
		.attr("id", "vm" + i)
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", "#f9ecd2");

	var tempX = parseInt(Math.cos(distanceAngle*(i+1))*dispositionRadius);
	var tempY = parseInt(Math.sin(distanceAngle*(i+1))*dispositionRadius);
	console.log(tempX);
	console.log(tempY);
		
	d3.select("#vm" + i)
	.attr("transform", "translate(" + tempX + "," + tempY + ")");
}

var circle = svg.append("circle")
	.attr("cx", windowsDimensions.x/2)
	.attr("cy", windowsDimensions.y/2)
	.attr("r", dispositionRadius)
	.attr("stroke", "black")
	.style("fill", "none");

