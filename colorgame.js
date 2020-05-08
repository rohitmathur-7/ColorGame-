var numSquares=6;
var colors=randomColors(numSquares);
var squares=document.getElementsByClassName("square");
var display=document.getElementById("display");
var goalColor=goalColor1();
var rgb=document.getElementById("rgb");
var h1=document.querySelector("h1");
var newColor=document.getElementById("newcolor");
var easy=document.querySelector("#ea");
var hard=document.querySelector("#ha");

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
       var clickedColor=this.style.backgroundColor;
        if(clickedColor===goalColor){
            changeColors(clickedColor);
            display.textContent="YOU WIN!!";
            h1.style.backgroundColor=clickedColor;
            newColor.textContent="Play Again!";
            }
        else{
        this.style.backgroundColor= "#232323";
        display.textContent="TRY AGAIN!!";
        }
    })
}

rgb.textContent=goalColor;

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}
function goalColor1()
{
    var random=Math.floor(Math.random() * colors.length);
    return colors[random]; 
}

function randomColors(num){
//make an array
    var arr=[];
//put colors in it
for(var i=0 ;i<num;i++){
    arr.push(generateColors());
}
return arr;

//generate colors
function generateColors(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +  ")";
}
}
newColor.addEventListener("click",function(){
    colors=randomColors(numSquares);
    goalColor=goalColor1();
    rgb.textContent=goalColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    newColor.textContent="New Color";
    h1.style.backgroundColor="steelblue";
    display.textContent="";
});

easy.addEventListener("click",function(){
    numSquares=3;
    colors=randomColors(numSquares);
    goalColor=goalColor1();
    rgb.textContent=goalColor;
    easy.classList.add("selected");
    hard.classList.remove("selected");

    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
})
hard.addEventListener("click",function(){
    numSquares=6;
     colors=randomColors(numSquares);
     goalColor=goalColor1();
     rgb.textContent=goalColor;
     for(var i=0;i<squares.length;i++){
     squares[i].style.backgroundColor=colors[i];
     squares[i].style.display="block";
    }
    hard.classList.add("selected");
    easy.classList.remove("selected");
    h1.style.backgroundColor="steelblue";
    })