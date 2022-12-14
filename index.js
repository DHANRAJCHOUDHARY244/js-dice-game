var randomno=Math.floor(Math.random()*6)+1; //random no between 1-6
var randomiceImage='dice'+randomno+".png";
var randomimgsrc='images/'+randomiceImage;
document.querySelector('.img1').setAttribute('src',randomimgsrc);


var randomno2=Math.floor(Math.random()*6)+1; //random no between 1-6
var randomiceImage2='images/'+'dice'+randomno2+".png";
document.querySelector('.img2').setAttribute('src',randomiceImage2);

if(randomno>randomno2){
    document.querySelector('.heading').innerHTML='🚩PLAYER 1 WIN';
}
else if(randomno<randomno2)
{
    document.querySelector('.heading').innerHTML='PLAYER 2 WIN🚩';
}
else{
    document.querySelector('.heading').innerHTML='DRAW';
}
function myURL() {
    window.location.reload();
 }
const audio = new Audio("sound/mixkit-video-game-retro-click-237.wav");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    audio.play();
    setTimeout(myURL, 500);
  });
  