console.log("yeahh")
let tit = document.querySelector("#tit") 
console.log(tit)
tit.textContent="nimeni altul"
let blabla = (age) => {console.log(age)}
blabla(5)
let container = document.querySelector(".container")
let heightToggle = false
let max = 6
let current = 1


container.onclick = () => {
  if (current === max) {
    current = 1 
  } else {
    current = current + 1
  }
  container.style.height = `${current}00px`
  // if (heightToggle === true) {
  //   // vrem sa fie de 300
  //   container.style.height = "300px"
  // } else {
  //   // vrem sa fie de 100 
  //   container.style.height = "100px"
  // }
  // heightToggle = !heightToggle

}
