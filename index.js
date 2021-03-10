
var randomNumber1=Math.floor(Math.random()*6)+1;
var name1="dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var name2="dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",name1);
document.querySelector(".img2").setAttribute("src",name2);



if(randomNumber1===randomNumber2)
{ document.querySelector("h1").innerHTML="it is a draw";

}
if(randomNumber1>randomNumber2)
{ document.querySelector("h1").innerHTML="player 1 wins" ;

}
if(randomNumber1<randomNumber2)
{ document.querySelector("h1").innerHTML="player 2 wins";

}
 // document.querySelector("h1").innerHTML=name2;
