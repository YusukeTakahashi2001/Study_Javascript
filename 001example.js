function init() {
    var a = 2,b=5,c=4;
    var x = (a != b);
    document.getElementById("info").textContent = x;
    console.log(a);
}

function keyDown(evt){
    if(evt.keyCode == 37) {
        console.log("LEFT");
    }
    
    if(evt.keyCode == 39) ship.moveL = true;
}