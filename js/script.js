let beginMinutes = 1
let workTime = beginMinutes * 60
let isBreak = true
let isRunning = false
let loop

const timerElement = document.getElementById("timer")
const buttonLaunch = document.getElementById("button")

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
                    document.getElementById("break").style.color = "white"
                    document.getElementById("work").style.color = "grey"
                    beginMinutes = 2
                    workTime = beginMinutes * 60
                    isBreak = false
                } else {
                    document.getElementById("background").style.background = "rgb(207, 1, 1)"
                    document.getElementById("work").style.color = "white"
                    document.getElementById("break").style.color = "grey"
                    beginMinutes = 1
                    workTime = beginMinutes * 60
                    isBreak = true
                }
            }
        
            workTime = workTime <= 0 ? 0 : workTime - 1
        
        }, 100)
    }
}

buttonLaunch.addEventListener('click', () => {
    if(isRunning == false){
        launchTravail()
        buttonLaunch.classList.remove('fa-play')
        buttonLaunch.classList.add('fa-arrow-rotate-left')
    } else {
        clearInterval(loop)
        isRunning = false
        workTime = beginMinutes * 60
        display()
        buttonLaunch.classList.remove('fa-arrow-rotate-left')
        buttonLaunch.classList.add('fa-play')
    }
})

display()


