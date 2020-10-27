"use strict";


// Number 1

let total = 0;




let limeCola = document.querySelector(".limeCola");
limeCola.addEventListener("click", ()=>{
    let price  = parseFloat(limeCola.getAttribute("data-price"));
    total += price;
    priceTotal.innerText = `Total: $${total}.00`;
    console.log(total.toFixed(2));
});

let saltedPeanuts = document.querySelector(".saltedPeanuts");
saltedPeanuts.addEventListener("click", ()=>{
    let price  = parseFloat(saltedPeanuts.getAttribute("data-price"));
    total += price;
    priceTotal.innerText = `Total: $${total}.00`;
    console.log(total.toFixed(2));
});

let chocolateBar = document.querySelector(".chocolateBar");
chocolateBar.addEventListener("click", ()=>{
    let price  = parseFloat(chocolateBar.getAttribute("data-price"));
    total += price;
    priceTotal.innerText = `Total: $${total}.00`;
    console.log(total.toFixed(2));
});

let fruitGummies = document.querySelector(".fruitGummies");
fruitGummies.addEventListener("click", ()=>{
    let price  = parseFloat(fruitGummies.getAttribute("data-price"));
    total += price;
    priceTotal.innerText = `Total: $${total}.00`;
    console.log(total.toFixed(2));
});


let priceTotal = document.querySelector(".priceTotal");
// priceTotal.innerText = `Total: $${total}.00`;


// Number 2

let makeMoney = document.querySelector(".makeMoney")
makeMoney.addEventListener("submit", (e)=>{
    e.preventDefault();
    let formData = new FormData(makeMoney);
    let howMany = formData.get("howMany");
    let whichCoin = formData.get("whichCoin");
    console.log(howMany, whichCoin);
});

let displayMoney = document.querySelector(".displayMoney")










// Number 3
let bulbOn = document.querySelector(".bulbOn")
let lightBulb = document.querySelector(".lightBulb");
bulbOn.addEventListener("click", ()=>{
    lightBulb.style.backgroundColor = "yellow";
});

let bulbOff = document.querySelector(".bulbOff")
bulbOff.addEventListener("click", ()=>{
    lightBulb.style.backgroundColor = "gray";
});

let toggleBulb = document.querySelector(".toggleBulb")
toggleBulb.addEventListener("click", ()=>{
    lightBulb.classList.toggle = "yellow"
})
