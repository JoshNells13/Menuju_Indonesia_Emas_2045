let menu = document.getElementById("menu-toggle")
let pilar = document.getElementById("pilar")


menu.style.height = "0px"
function toggle(){
    if(menu.style.height == "0px"){
        menu.style.height = "150px"
    }else{
        menu.style.height = "0px"
    }
}



pilar.classList = "pilar-section"

function toggledark(){
    if(pilar.classList == "pilar-section"){
         pilar.classList = "darkTheme"
    }else{
         pilar.classList = "pilar-section"
    }
       
}


