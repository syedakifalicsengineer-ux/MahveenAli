function openEnvelope(){

document.getElementById("envelope").classList.add("open")

let music = document.getElementById("bgMusic")
music.volume = 0.6
music.play()

setTimeout(()=>{
document.getElementById("letter-view").classList.add("active")
},1200)

}

function closeLetter(){

document.getElementById("letter-view").classList.remove("active")

document.getElementById("bgMusic").pause()

}

/* CHANGE BACKGROUND IMAGE */

function changeBG(){
document.body.classList.add("open-bg")
}