//to be used with https://myrient.erista.me/files/No-Intro/
//shows how much space each full set is

let hold = [];
let Kib = 0;
let Mib = 0;
let y = document.getElementById("list")
for (let index = 1; index <= (y.children[1].childElementCount)-1; index++) {
    hold.push(y.children[1].children[index].children[1])
}
for (let index = 0; index <= hold.length-1; index++) {
    if((hold[index].textContent.split(" ")[1]) === "KiB"){
    	Kib += parseFloat(hold[index].textContent.split(" ")[0])
    }
    else{
    	Mib += parseFloat(hold[index].textContent.split(" ")[0])
    }
}
