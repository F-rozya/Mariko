
let burger = document.getElementById("burger");
let navigate = document.getElementById("header__nav");
burger.addEventListener("click" , () => {
    burger.classList.toggle('burger-active');
    navigate.classList.toggle('nav-active');
    document.body.classList.toggle('lock')
})


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('trigger-show');
      } 
      else {
        change.target.classList.remove('trigger-show')
      }
    });
  }
  let options = {
    threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.trigger-act');
  
  setTimeout(()=>{
    for (let elm of elements) {
      observer.observe(elm);
    }
  
  } , 200)
