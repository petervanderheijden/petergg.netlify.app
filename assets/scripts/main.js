function myFunction() {
    var para = document.getElementsByClassName("navbar__links");

    if(para.classList.contains("navbar__links")) {
        para.classList.remove("navbar__links");
        para.classList.add("navbar__links_open");
    }
    else {
        para.classList.remove("navbar__links_open");
        para.classList.add("navbar__links");
    }
}