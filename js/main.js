import { Modal } from './modal.js'

// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


//formas de criar  e atribuir função a um evento
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message 
  Modal.open()
}

//form.onsubmit = () => {}

//form.onsubmit = handleSubmit
//function handleSubmit () {}




function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}