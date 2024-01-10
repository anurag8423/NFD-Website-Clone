let toggleCollapse=false;
function toggle(){
    if(!toggleCollapse){
        toggleCollapse=true;
        let ele1=document.getElementById("nav-cont");
        ele1.classList.add("nav-cont1")
        ele1=document.getElementById("nav1")
        ele1.classList.add("nav11")
        ele1=document.getElementById("logo-div")
        ele1.classList.add("logo-div1")
        ele1=document.getElementById("logo2")
        ele1.classList.add("nav-logo-cont1")
        ele1=document.getElementById("logo1")
        ele1.style.backgroundColor="#7f3df085"
        ele1.classList.add("nav-logo-cont1")
    }
    else{
        toggleCollapse=false;
        let ele1=document.getElementById("nav-cont");
        ele1.classList.remove("nav-cont1")
        ele1=document.getElementById("nav1")
        ele1.classList.remove("nav11")
        ele1=document.getElementById("logo-div")
        ele1.classList.remove("logo-div1")
        ele1=document.getElementById("logo2")
        ele1.classList.remove("nav-logo-cont1")
        ele1=document.getElementById("logo1")
        ele1.style.backgroundColor="transparent"
        ele1.classList.remove("nav-logo-cont1")
    }
}