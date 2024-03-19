import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber} from './utils.js'

// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//formas de criar  e atribuir função a um evento
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotANumber) {
    console.log('Mostrar alerta')
    AlertError.open()
    return;
  }
  
  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message 
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
//form.onsubmit = () => {}

//form.onsubmit = handleSubmit
//function handleSubmit () {}

