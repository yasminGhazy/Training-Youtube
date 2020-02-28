function Nav(){
    if(document.getElementById("main").style.width !="calc(100% - 210px)"){
        document.getElementById("sidenav").style.width="200px";
        document.getElementById("main").style.width ="calc(100% - 210px)";
        document.getElementById("main").style.marginLeft  = "200px";
    }
    else 
    {
        document.getElementById("sidenav").style.width="0px";
        document.getElementById("main").style.width ="calc(100% - 70px)";
        document.getElementById("main").style.marginLeft  = "70px";
    }
    


}
