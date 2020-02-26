function Nav(){
    if(document.getElementById("Sidenav").style.width!="200px"){
    document.getElementById("Sidenav").style.width="200px";
    document.getElementById("main").style.width ="1150px";
    document.getElementById("main").style.left ="100px";
    document.getElementById("main").style.right ="0px";
    document.getElementById("Sidenav").style.zIndex="1";
    document.getElementById("Sidenav").style.position="fixed";
    
    }
else
{
    document.getElementById("Sidenav").style.width="0px";
    document.getElementById("main").style.width="1250px";
    document.getElementById("main").style.left ="0px";
    document.getElementById("main").style.right ="100px";
}

}