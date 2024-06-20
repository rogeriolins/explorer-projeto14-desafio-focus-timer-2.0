import state from "./states.js"
import { controls } from "./elements.js"
import { updateDisplay } from "./timer.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.theaction
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  // Expressão regular. Foi digitado um número
  // el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener("onkeypress", (event) =>
    /\d/.test(event.key) ? null : event.preventDefault()
  )

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}
