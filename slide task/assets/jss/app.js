var slideImages = ['/assets/images/umumi.avif', '/assets/images/salon.avif', '/assets/images/speed.jpg']
let image = document.querySelector('.slides img')
let slidecount = 0;
var slides = document.querySelector('.slides')
image.src = slideImages[slidecount];
let next = document.querySelector('.nextbtn')
let prev = document.querySelector('.prevbtn')
var dots = document.querySelector('.dots')
var img = document.querySelector('.imgg');
img.id = 'imgs';




for (let index = 0; index < slideImages.length; index++) {
    var dot = document.createElement('div')
    dot.className = 'dt';
    dots.appendChild(dot)
   
}




var createdDots = document.getElementsByClassName("dt");

for (let index = 0; index < slideImages.length; index++) {

   
    createdDots[index].onclick = function () {
        image.src = slideImages[index]
    }


}   

next.onclick = function () {
    slidecount++;
    if (slidecount >= slideImages.length) {
        slidecount = 0;
    }
    image.src = slideImages[slidecount]
}

prev.onclick = function () {
    slidecount--;
    if (slidecount == -1) {
        slidecount = slideImages.length - 1;
    }
    image.src = slideImages[slidecount]
}


