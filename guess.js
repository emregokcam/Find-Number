
let input = document.getElementById("text");
let button = document.getElementById("btn");
let statement = document.getElementById("statement");
let tester = document.getElementById("tester");
let weite = document.getElementById("weite");

let rndm = Math.floor(Math.random()*101); 
/* Rasgele sayı üretmek için Math (0 dahil 1   hariç)*/

button.addEventListener("click",check);

let counter = 0;

function check() {
   
    let num = Number(input.value);
    
    if (isNaN(num) || num == "" ) {

      statement.innerText = "Are you sure that is a number ?";
      return;    
    } 

    if (rndm == num){
        counter++;
        alert(`You are the winner :smile:. You guest after ${counter} times!`);
        
        if (confirm("You wanna play again")){
            window.location.reload();

        }else{
            window.close();
        }

        
    }else if(rndm>num){
        statement.innerText = "I am thinking about Higher Number";

    }else {
        statement.innerText ="I am thinking about Lower Number";
    }

    counter++;
    weite.innerText= "Weite the number";
    tester.innerText=`This is your test number:${counter}`;

    input.value ="";
    input.focus();
  

}


