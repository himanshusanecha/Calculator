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