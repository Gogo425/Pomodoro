let beginMinutes = 1
let workTime = beginMinutes * 60
let isBreak = true
let loop

const timerElement = document.getElementById("timer")
const buttonLaunch = document.getElementById("buttonLaunch")
const buttonRestart = document.getElementById("buttonRestart")

function display(){
    let minutes = parseInt(workTime / 60, 10)
    let seconds = parseInt(workTime % 60, 10)
    minutes = "0" + minutes
    seconds  = "0" + seconds
    timerElement.innerText = `${minutes}:${seconds}`
}

function launchTravail(){
        loop = setInterval(() => {
            
            let minutes = parseInt(workTime / 60, 10)
            let seconds = parseInt(workTime % 60, 10)
        
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds
        
            timerElement.innerText = `${minutes}:${seconds}`

            if(workTime == 0){

                if(isBreak == true){
                    beginMinutes = 2
                    workTime = beginMinutes * 60
                    isBreak = false
                    console.log(workTime)
                } else {
                    beginMinutes = 1
                    workTime = beginMinutes * 60
                    isBreak = true
                    console.log(workTime)
                }
            }

            workTime = workTime <= 0 ? 0 : workTime - 1

        }, 100)
}

buttonRestart.addEventListener('click', () => {
    clearInterval(loop)
    workTime = beginMinutes * 60
    display()
})

buttonLaunch.addEventListener('click', () => {
    launchTravail()
})

display()


