var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle("is-open");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            // accordion is open
            content.style.maxHeight = null;
        } else {
            // accordion is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
    
}