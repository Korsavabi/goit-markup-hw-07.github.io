window.onload = function (){
    var menuStyle = getComputedStyle(menu);
    openMenu.onclick = function () {
        if (menuStyle.display == "none"){
            menu.classList.add("active");
            this.innerHTML = '<i class="fas fa-times clouse-icon"></i>';
        } else {
            menu.classList.remove("active");
            this.innerHTML = '<i class="fas fa-bars burger-icon"></i>';
            
        }
    }
}