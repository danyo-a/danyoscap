function opennav(){
    document.getElementById("sidenav").style.width = "240px";

}
function closenav(){
    document.getElementById("sidenav").style.width = "0";

}
 let slideindex = 0;
showslide();
function showslide() {
let i;
let slide = document.getElementsByClassName("slideshow");
for (i = 0; i < slide.length; i++) {
 slide[i].style.display = "none";
}
slideindex++;
if (slideindex > slide.length) {
 slideindex = 1;
}
slide[slideindex - 1].style.display = "inline-block";
setTimeout(showslide, 2000);
}
document.getElementById("productnumber").textContent=0;
console.log(productnumber);