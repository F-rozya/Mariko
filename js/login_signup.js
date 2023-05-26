
let burger = document.getElementById("burger");
let navigate = document.getElementById("header__nav");
burger.addEventListener("click" , () => {
    burger.classList.toggle('burger-active');
    navigate.classList.toggle('nav-active');
    document.body.classList.toggle('lock')
})



let trigger0 = document.querySelectorAll('.trigger-act')[0]
let trigger1 = document.querySelectorAll('.trigger-act')[1]
let trigger2 = document.querySelectorAll('.trigger-act')[2]
let trigger3 = document.querySelectorAll('.trigger-act')[3]
let trigger4 = document.querySelectorAll('.trigger-act')[4]
let trigger5 = document.querySelectorAll('.trigger-act')[5]

setTimeout(()=>{
    trigger0.classList.add('trigger-show')
} , 0)
setTimeout(()=>{
    trigger1.classList.add('trigger-show')
} , 500)
setTimeout(()=>{
    trigger2.classList.add('trigger-show')
} , 1000)
setTimeout(()=>{
    trigger3.classList.add('trigger-show')
} , 1500)
setTimeout(()=>{
    trigger4.classList.add('trigger-show')
} , 2000)
setTimeout(()=>{
    trigger5.classList.add('trigger-show')
} , 2500)