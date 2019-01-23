let flight = document.querySelector("#flight")
let mindreading = document.querySelector("#mindreading")
let xray = document.querySelector("#xray")
let powerList = document.querySelectorAll("section")

console.log(powerList)


flightHandlerFunction = document.querySelector("#activate-flight").addEventListener("click", function () {
    flight.classList.toggle("enabled")
})
mindreadingFunction = document.querySelector("#activate-mindreading").addEventListener("click", function () {
    mindreading.classList.toggle("enabled")
})
xrayFunction = document.querySelector("#activate-xray").addEventListener("click", function () {
    xray.classList.toggle("enabled")
})
activateAllFunction = document.querySelector("#activate-all").addEventListener("click", function () {
    for (let i = 0; i < powerList.length; i++) {
    powerList[i].classList.remove("disabled")
    powerList[i].classList.add("enabled")
    }
})
deactivateAllFunction = document.querySelector("#deactivate-all").addEventListener("click", function () {
    for (let i = 0; i < powerList.length; i++) {
    powerList[i].classList.remove("enabled")
    powerList[i].classList.add("disabled")
    }
})





