const formDIV = document.querySelector("form");
const result = document.querySelector(".BmiResult");
let height1 = document.querySelector("#height");
let weight1 = document.querySelector("#weight");

formDIV.addEventListener("submit",(e)=>{
e.preventDefault()

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    
    result.innerHTML=(weight /((height*height)/10000)).toFixed(2)
    console.log(height*weight);
   
});


let button = document.querySelector("#button1");
button.addEventListener("click",()=>{
    if(height1.value>=230 ){
height1.innerHTML = height1.value="this is Not Human height";
console.log(height1.innerHTML);
 } else if(weight1.value>=530 ){
weight1.innerHTML = weight1.value="this is Not Human weight";
console.log(height1.innerHTML);
    }
});


// Digital Clock -------------------------------------------------------

const clock = document.querySelector(".clock");
    setInterval(() => {
        let date = new Date();
        let showTime =  date.toLocaleTimeString()
        clock.innerHTML= showTime;
    }, 1000);


    // /Guessing Game ------------------------------------------
    
    const computerGuess = document.querySelector(".computerGuess")
    const GuessRemain = document.querySelector(".GuessRemain")
    const formDIV2 = document.querySelector(".form2");
  
    const win = document.querySelector(".win");
    const wintime = document.querySelector(".wintime");
    let count= 5;
    let wintimeConut = 0;
 
    formDIV2.addEventListener("submit",(e)=>{
        e.preventDefault()
        let UserInput = document.querySelector("#guess")
        const GenerateRandom = parseInt(Math.random()*5 +1);
       
        if( UserInput.value==GenerateRandom){
            win.innerHTML="Win";
            // wintimeConut++
            wintime.innerHTML =++wintimeConut
           }else{
            win.innerHTML="Loss"
         }
         if(UserInput.value>5 || UserInput.value<1 ){
            win.innerHTML="Invaid input";
            computerGuess.innerHTML="Opps";
         } else{
            GuessRemain.innerHTML = --count
            computerGuess.innerHTML=GenerateRandom;
         }
         UserInput.value="";

        });

       
        const button2 = document.querySelector("#button2");
        
        button2.addEventListener("click",()=>{
                     if(count==1){
                button2.disabled = true;
                button2.style.cursor=" not-allowed"
                win.innerHTML="Refresh Brower";
                GuessRemain.innerHTML = "0"
            }
         
        })