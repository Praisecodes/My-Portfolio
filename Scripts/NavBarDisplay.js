show = false;

function toogleNavBar(){
    if(show===false){
        document.getElementById("navigationBoard").style.display = "block";
        show = true;
    }else{
        closeBar();
    }
}

function closeBar(){
    document.getElementById("navigationBoard").style.display = "none";
    show = false;
}
