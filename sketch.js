function setup() {
createCanvas(1760, 1010);
background(0);


stroke(255);
strokeWeight(3);
var u=30;
var v=30;
for (var u=30; u<1750; u=u+200) {
for (var v=30; v<1000; v=v+50) {
arc(u, v, 50, 50, 0.00, 3.14);
}
}

var y=130;
var z=30;
for (var y=130; y<1750; y=y+200) {
for (var z=30; z<1000; z=z+50) {
arc(y, z, 50, 50, 3.14, 0.00);
}
}

var w=80;
var x=30;
fill(127);
stroke(255);
for (var w=80; w<1750; w=w+100) {
for (var x=30; x<1000; x=x+50) {
arc(w, x, 50, 50, 1.57, 4.71);
}
}

var s=80;
var t=30;
fill(192);
stroke(255);
for (var s=80; s<1750; s=s+100) {
for (var t=30; t<1000; t=t+50) {
arc(s, t, 50, 50, 4.71, 1.57);
}
}

}
