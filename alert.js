var x=prompt("inter number 3");
var y=prompt("inter number 5");

if (x < y){
    alert(parseInt (x))
}
else if (y < x){
    alert(parseInt(y))
}



var x =prompt("inter number 1");
var y =prompt("inter number 2");
var z =prompt("inter number 3");
if (x > y && x > z){
    alert (parseInt(x));
}
else if (y > x && y > z ){
    alert (parseInt (y));
}
else if (z > y && z > x){
    alert (parseInt (z));
    if (x < y && x < z){
        alert (parseInt (x));
    }
    else if (y < x && y < z){
        alert (parseInt (y));
    }
    else if (z < x && z < y){
        alert (parseInt (z));
    } 
}
else {
    alert ("hello user");
}
