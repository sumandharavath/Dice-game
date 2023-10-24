var randomNumber1=Math.floor(Math.random()*6)+1;
var imageSource1="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h5").innerHTML="Player-1 wins🏆";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h5").innerHTML="Player-2 wins🏆";
}
else
{
    document.querySelector("h5").innerHTML="Draw !";
}