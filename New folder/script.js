var nrtrBtn = document.getElementById("nrtrBtn");
var nrtr = document.getElementById("nrtr")
var messageIndex = 0;

var messages = [
    'Can\'t you read?',
    'Bruh..',
    'It says USELESS!!!',
    'OK, fine',
    'Here',
    'Now it does something', // have the button dissapear when you click it
    'Oh, Wait',
    'Alright, there', // the button comes back
    'I\'ll leave you with that', // wait 5 clicks till next comment
    '',
    '',
    'Still not enough for you?', // stop making it open new tabs
    'God, you\'re greedy',
    'Alright, you wanna mess with me?',
    'I wouldn\'t!',
    'I\'ll show you my POWER!!!', // open sketchywebsite.net
    'Wait, you figured that out?',
    'I thought my design was foolproof!',
    'Alright, time to get serious.',
    'No more fooling around',
    'Click the Button, I DARE YOU!',
    'HA! I WARNED YOU!!!',
    'Anyways, that\'s it',
    'THE END :)'

]



function buttonshow() {
    nrtr.innerText = ("Alright, there")
    nrtrBtn.style.display = "block"
} 

function fixit() {
    nrtr.innerText = ('Let me fix that for you')
}

function buttonhide() {
    nrtrBtn.style.display = "none" 
    setTimeout(fixit , 1500)
}

function reshow() {
    setTimeout(buttonshow , 3000)
} 

  function notnewtab() {
    stop()
  }


        let clickcount = 0;
const requiredclicks = 7;


function handlebuttonclick() {
    clickcount++;

    if (clickcount === requiredclicks) {
        buttonhide()
        setTimeout(reshow, 3000)
       
    }
}

function newtab() {
   window.open("https://google.com")
}

let clickcount1 = 0;
const requiredclicks1 = 8;
const clickcount1a = 12;
const clickcount2 = 17;
const clickcount3 = 22;
const url = 'https://sketchywebsite.net'
const tabnumber = 3;

function loud () {
    const loudsound = newAudio("./(earrape)-nails-on-chalkboard-&-high-freqeuncy-sound-made-with-Voicemod.mp3")
}

function handlebuttonclick1() {
    clickcount1++;

    if (clickcount1 >= requiredclicks1 && clickcount1 <= clickcount1a) {
       //newtab() 
    }
    
    if (clickcount1 === clickcount2) {
        window.open("https://sketchywebsite.net")
    }

    if (clickcount1 === clickcount3) {
        window.open('https://deathdate.info/s/death')
        console.log('works')
        }
    }


nrtrBtn.addEventListener('click', function() {
    console.log('MI: ', messages.length)
    if (messageIndex <= messages.length -1) {
        nrtr.innerText = messages[messageIndex]
        messageIndex++;
        handlebuttonclick1()
    } else {
        console.log('ran out');
    }
})