//Variable declaration for the work time, break time, booleans for certains test and the variable loop for the setInterval function
let workTime = localStorage.getItem("inputWork") || 25
let breakTime = localStorage.getItem("inputBreak") || 5
let isBreak = true
let isRunning = false
let isForm = false
let loop

//Declaration of the constants which represents all the HTML elements that needs to be interacted with
const timerElement = document.getElementById("timer")
const buttonLaunch = document.getElementById("buttonStart")
const formulaire = document.getElementById("formulary")
const settingsButton = document.getElementById("settings")
const numberWork = document.getElementById("numberWork")
const numberBreak = document.getElementById("numberBreak")
const inputBreak = document.getElementById("newTimeBreak")
const inputWork = document.getElementById("newTimeWork")
const submitButton = document.getElementById("check")

//the 3 main functions
launch()
display()
form()

/**
 * @author Hugo JAUBERT
 * The function which when the ButtonLaunch is pressed calls the function timer() and switches the button icon
 */
function launch(){
    buttonLaunch.addEventListener('click', () => {
        if(isForm == false){
            if(isRunning == false){
                timer()
                buttonLaunch.classList.remove('fa-play')
                buttonLaunch.classList.add('fa-arrow-rotate-left')
            } else {
                clearInterval(loop)
                isRunning = false
                location.reload()
                buttonLaunch.classList.remove('fa-arrow-rotate-left')
                buttonLaunch.classList.add('fa-play')
            }
        }
    })
}

/**
 * @author Hugo JAUBERT
 * Allows to show the timer with the minutes and the seconds
 */
function display(){
    let time = workTime * 60
    let minutes = parseInt(time / 60, 10)
    let seconds = parseInt(time % 60, 10)
    seconds  = "0" + seconds
    if(workTime < 10){
        minutes = "0" + minutes
    }
    timerElement.innerText = `${minutes}:${seconds}`
}

/**
 * @author Hugo JAUBERT
 * Starts an interval to make a timer with the given numbers which decreases every second
 */
function timer(){
    let time = workTime * 60
    form()
    if(isRunning == false && isForm == false){
        loop = setInterval(() => {
            isRunning = true
            let minutes = parseInt(time / 60, 10)
            let seconds = parseInt(time % 60, 10)                
            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds    
            timerElement.innerText = `${minutes}:${seconds}`
        
            if(time == 0){
        
                if(isBreak == true){
                    toBreakColor()
                    time = breakTime * 60
                    isBreak = false
                } else {
                    toWorkColor()
                    time = workTime * 60
                    isBreak = true
                }
            }
        
            time = time <= 0 ? 0 : time - 1
        
        }, 10)
    }
}

/**
 * @author Hugo JAUBERT
 * Switches the color to green when the work time has reached 0
 */
function toBreakColor(){
    document.getElementById("background").style.background = "green"
    document.getElementById("workBreak").style.background = "green"
    document.getElementById("break").style.color = "white"
    document.getElementById("work").style.color = "grey"
}

/**
 * @author Hugo JAUBERT
 * Switches the color to red when the break time has reached 0
 */
function toWorkColor(){
    document.getElementById("background").style.background = "rgb(207, 1, 1)"
    document.getElementById("workBreak").style.background = "rgb(207, 1, 1)"
    document.getElementById("work").style.color = "white"
    document.getElementById("break").style.color = "grey"
}

/**
 * @author Hugo JAUBERT
 * The main function which handles the formulary
 */
function form(){
        buttonLaunch.addEventListener('click', ()=> {
            if(isForm == true){
                alert("Finissez de remplir les paramètres ou quittez les avant de relancer le chronomètre")
            }
        })

        display_form()

        edit_time();
}

/**
 * @author Hugo JAUBERT
 * Handles whenthe form should appear
 */
function display_form(){
    settingsButton.addEventListener('click', ()=> {
        if(!isRunning){
            isForm = true;
            formulaire.style.display = "block"             
        }
    })

    submitButton.addEventListener('click', ()=> {
        isForm = false;
        if(!isRunning){
            formulaire.style.display = "none"
        }
    })
}

/**
 * @author Hugo JAUBERT
 * When the user enters a value in the input zone, it is set with the LocalStorage 
 */
function edit_time(){
    inputBreak.addEventListener('change', ()=> {
        if(inputBreak.value <= 120 && inputBreak.value >= 1){
            localStorage.setItem("inputBreak", inputBreak.value)
            breakTime = inputBreak.value
            display()
        }
    })

    inputWork.addEventListener('change', ()=> {
        if(inputWork.value <= 120 && inputWork.value >= 1){
            localStorage.setItem("inputWork", inputWork.value)
            workTime = inputWork.value
            display()
        }
    })
}


