//while loop
var x = 1;
while (x <= 51){
    document.getElementById("firstLine").innerHTML += x + ", ";
    x = x + 2;
}

//do while loop
var y = 2;
do{
    document.getElementById("secondLine").innerHTML += y + ", ";
    y = y + 2;
}while (y <= 50)

//for loop
for (var z = 1; z <= 4096; z = z * 2){
    document.getElementById("thirdLine").innerHTML += z + ", ";
}