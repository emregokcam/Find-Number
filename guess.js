let rndm = Math.floor(Math.random()*101); 
/* Rasgele sayı üretmek için Math (0 dahil 1   hariç)*/
document.getElementById("btn").addEventListener("click",check)

function check() {
    let num = document.getElementById("text").value;
    if (rndm == num) {
        alert("bildin");    
    }else if (rndm > num) {
        alert("biraz yukarı");
    }else {
        alert("biraz aşağıya");
    } 
}

console.log(rndm);
