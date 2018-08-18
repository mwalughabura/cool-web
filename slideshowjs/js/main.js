var i = 0;

function change_image (){
    document.getElementById("slideshow").src = "../img/img"+(i++ % 6)+".jpg";
}

function slider() {
    setInterval(change_image, 1000);
}