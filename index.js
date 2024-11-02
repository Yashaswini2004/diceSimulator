const diceFace=document.getElementById("dice");
const history=document.getElementById("dice-history");
const roll=document.getElementById("btn");
let rollHistory=[];
function rollDice(){
   const rollResult=Math.floor(Math.random()*6)+1;
   const face=getFace(rollResult);
   diceFace.innerHTML=face;
   rollHistory.push(rollResult);
   updateHistory();
}

function updateHistory() {
    history.innerHTML = ""; 
    for (let i = 0; i < rollHistory.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getFace(rollHistory[i])}</span>`;
        history.append(listItem); 
    }
}
function getFace(rollResult)
{
    switch(rollResult)
    {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
    }
}
roll.addEventListener("click",function(){
    diceFace.classList.add("roll-animation");
    setTimeout(()=>{
        diceFace.classList.remove("roll-animation");
        rollDice();
    },1000 );

});
