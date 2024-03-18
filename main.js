// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}


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

Modal.btnClose.onclick = () => Modal.close()


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}