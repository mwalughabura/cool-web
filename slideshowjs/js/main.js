var i = 0;

function change_image (){
    document.getElementById("slideshow").src = "img/img"+(i++ % 5)+".png";
}

function slider() {
    setInterval(change_image, 1000);
}