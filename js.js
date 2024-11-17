let menu = document.getElementById("menu-toggle")

menu.style.height = "0px"

function toggle(){
    if(menu.style.height == "0px"){
        menu.style.height = "150vh"
    }else{
        menu.style.height = "0px"
    }
}


