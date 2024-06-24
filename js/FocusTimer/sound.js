import state from "./states.js"

export const buttonPressAudio = new Audio("./assets/button-press.wav")

export const kitchenTimer = new Audio("./assets/kichen-timer.mp3")

export const bgAudioFloresta = new Audio("./assets/floresta.wav")
export const bgAudioChuva = new Audio("./assets/chuva.wav")
export const bgAudioCafeteria = new Audio("./assets/cafeteria.wav")
export const bgAudioLareira = new Audio("./assets/lareira.wav")

bgAudioFloresta.loop = true
bgAudioChuva.loop = true
bgAudioCafeteria.loop = true
bgAudioLareira.loop = true

export function soundPlay() {
  if (state.isRunning) {
    if (state.soundBackground == "cardchuva") {
      bgAudioChuva.play()
    } else if (state.soundBackground == "cardfloresta") {
      bgAudioFloresta.play()
    } else if (state.soundBackground == "cardcafeteria") {
      bgAudioCafeteria.play()
    } else {
      bgAudioLareira.play()
    }
  }
}

export function soundStop() {
  if (state.soundBackground == "cardchuva") {
    bgAudioChuva.pause()
  } else if (state.soundBackground == "cardfloresta") {
    bgAudioFloresta.pause()
  } else if (state.soundBackground == "cardcafeteria") {
    bgAudioCafeteria.pause()
  } else {
    bgAudioLareira.pause()
  }
}
