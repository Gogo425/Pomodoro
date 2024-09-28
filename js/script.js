let workTime = 10
let breakTime = 5
let time = workTime * 60
let isBreak = true
let isRunning = false
let loop

const timerElement = document.getElementById("timer")
const buttonLaunch = document.getElementById("button")

function display(){
    let minutes = parseInt(time / 60, 10)
    let seconds = parseInt(time % 60, 10)
    seconds  = "0" + seconds
    if(workTime < 10){
        minutes = "0" + minutes
    }
    timerElement.innerText = `${minutes}:${seconds}`
}

function launchTravail(){
    if(!isRunning){
        loop = setInterval(() => {
            isRunning = true
            let minutes = parseInt(time / 60, 10)
            let seconds = parseInt(time % 60, 10)                
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds    
            timerElement.innerText = `${minutes}:${seconds}`
        
            if(time == 0){
        
                if(isBreak == true){
                    document.getElementById("background").style.background = "green"
                    document.getElementById("workBreak").style.background = "green"
                    document.getElementById("break").style.color = "white"
                    document.getElementById("work").style.color = "grey"
                    time = breakTime * 60
                    isBreak = false
                } else {
                    document.getElementById("background").style.background = "rgb(207, 1, 1)"
                    document.getElementById("workBreak").style.background = "rgb(207, 1, 1)"
                    document.getElementById("work").style.color = "white"
                    document.getElementById("break").style.color = "grey"
                    time = workTime * 60
                    isBreak = true
                }
            }
        
            time = time <= 0 ? 0 : time - 1
        
        }, 10)
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
        location.reload()
        buttonLaunch.classList.remove('fa-arrow-rotate-left')
        buttonLaunch.classList.add('fa-play')
    }
})

display()


