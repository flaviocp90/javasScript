let numero = document.getElementById("number");

let plus = document.querySelector("#incBtn");
plus.addEventListener("click",function(){
    numero.value = parseInt(numero.value) + 1;
})

let minus = document.querySelector("#decBtn");
minus.addEventListener('click',function(){
    numero.value = parseInt(numero.value) - 1;
    if(numero.value < 0) {
        alert("Attenzione questo è un numero negativo!");
        numero.value = 0;
    }
})

let reset = document.querySelector("#reset");
reset.addEventListener('click',function(){
    numero.value = 0;
})
