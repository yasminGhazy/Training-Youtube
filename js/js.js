function Nav(){
    var width_;
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
function viewoverlay(){
    var mql = window.matchMedia("screen and (max-width: 400px)")
    if(mql.matches)
    document.getElementById("overlay").style.display = "block";
}
function closeoverlay(){
    ///var mql = window.matchMedia("screen and (max-width: 400px)")
    //if(mql.matches)
   // document.getElementById("overlay").style.display = "none";
   var modal = document.getElementById('overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

