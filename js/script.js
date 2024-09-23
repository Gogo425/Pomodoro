let beginMinutes = 1
let workTime = beginMinutes * 60
let isBreak = true
let isRunning = false
let loop

const timerElement = document.getElementById("timer")
const buttonLaunch = document.getElementById("buttonStart")
const buttonRestart = document.getElementById("buttonRestart")

function display(){
    let minutes = parseInt(workTime / 60, 10)
    let seconds = parseInt(workTime % 60, 10)
    seconds  = "0" + seconds
    timerElement.innerText = `${minutes}:${seconds}`
}

function launchTravail(){
    if(!isRunning){
        loop = setInterval(() => {
            isRunning = true
            let minutes = parseInt(workTime / 60, 10)
            let seconds = parseInt(workTime % 60, 10)                
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds    
            timerElement.innerText = `${minutes}:${seconds}`
        
            if(workTime == 0){
        
                if(isBreak == true){
                    document.getElementById("background").style.background = "green"
                    beginMinutes = 2
                    workTime = beginMinutes * 60
                    isBreak = false
                } else {
                    document.getElementById("background").style.background = "rgb(207, 1, 1)"
                    beginMinutes = 1
                    workTime = beginMinutes * 60
                    isBreak = true
                }
            }
        
            workTime = workTime <= 0 ? 0 : workTime - 1
        
        }, 1)
    }
}

// function verif(){
//     if(isRunning == true){
//         document.querySelector("button").innerHTML = "fa-solid fa-arrow-rotate-left fa-10x"
//     } else {
//         document.querySelector("button").innerHTML = "fa-solid fa-play fa-10x"
//         clearInterval(loop)
//         isRunning = false
//         workTime = beginMinutes * 60
//         display()
//     }
// }

buttonRestart.addEventListener('click', () => {
    clearInterval(loop)
    isRunning = false
    workTime = beginMinutes * 60
    display()
})

buttonLaunch.addEventListener('click', () => {
    launchTravail()
})

display()


