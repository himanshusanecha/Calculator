var input = document.getElementById("tex");
input.addEventListener("keyup",function(e){
    if(e.keyCode===13){
        expr();
    }
})
function display(x){
    document.getElementById("tex").value += x;
}
function expr(){
    var x = document.getElementById("tex").value;
    var y = eval(x);
    document.getElementById("tex").value = y;
}
function clrs(){
    document.getElementById("tex").value = "";
}
function wh(x){
    x.style.background = "white";
}
function bl(x){
    x.style.background = "blue";
}
