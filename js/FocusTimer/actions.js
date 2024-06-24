import state from "./states.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sound.js"

export function play() {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
  sounds.buttonPressAudio.play()
  if (state.isRunning) {
    el.dotz.classList.add("blinkDotz")
  } else {
    el.dotz.classList.remove("blinkDotz")
  }
  sounds.soundPlay()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
  sounds.soundStop()
}

export function more() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  minutes = minutes + 5
  if (minutes > 60) {
    minutes = 60
    seconds = 0
  }
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()
}

export function less() {
  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)
  if (minutes < 5) {
    minutes--
    if (minutes < 1) {
      minutes = 0
      seconds = 59
    }
  } else {
    minutes = minutes - 5
    if (minutes < 5) {
      minutes = 5
      seconds = 0
    }
  }
  timer.updateDisplay(minutes, seconds)
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  el.dotz.classList.remove("blinkDotz")
  timer.updateDisplay()
  sounds.soundStop()
}

// Funcoes de Background Sound
export function cardfloresta() {
  state.soundBackground = "cardfloresta"
  cleanControlsSound()
  card1.classList.add("selected")
  if (state.isRunning) {
    sounds.soundStop()
    sounds.soundPlay()
  }
}
export function cardchuva() {
  state.soundBackground = "cardchuva"
  cleanControlsSound()
  card2.classList.add("selected")
  if (state.isRunning) {
    sounds.soundStop()
    sounds.soundPlay()
  }
}
export function cardcafeteria() {
  state.soundBackground = "cardcafeteria"
  cleanControlsSound()
  card3.classList.add("selected")
  if (state.isRunning) {
    sounds.soundStop()
    sounds.soundPlay()
  }
}
export function cardlareira() {
  state.soundBackground = "cardlareira"
  cleanControlsSound()
  card4.classList.add("selected")
  if (state.isRunning) {
    sounds.soundStop()
    sounds.soundPlay()
  }
}

function cleanControlsSound() {
  card1.classList.remove("selected")
  card2.classList.remove("selected")
  card3.classList.remove("selected")
  card4.classList.remove("selected")
  sounds.bgAudioCafeteria.pause()
  sounds.bgAudioChuva.pause()
  sounds.bgAudioFloresta.pause()
  sounds.bgAudioLareira.pause()
}
