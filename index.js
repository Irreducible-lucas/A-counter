let countEl = document.getElementById("counter-el")
let Increment = document.getElementById("Increment")
let decrease = document.getElementById("decrease")
let reset= document.getElementById("reset")

let count = 0

decrease.addEventListener("click", function(){
  count -=1
  countEl.textContent = count
})
Increment.addEventListener("click", function(){
  count ++
  countEl.textContent = count
})

reset.addEventListener("click", function(){
 countEl.textContent = 0
 count= 0
})