// const input = document.getElementById('input')
// const numbers = document.getElementsByClassName('num')
// const symbols = document.getElementsByClassName('symbol')
// let lastClicked = 'symbol'

// const allowedNum = [...document.querySelectorAll('.num')].map(ev => ev.textContent)
// const allowedSimbols = [...document.querySelectorAll('.symbol')].map(ev => ev.textContent)

// Array.from(numbers).forEach(function(numberElement) {
//   const numberValue = numberElement.textContent
//   numberElement.addEventListener('click', function() {
//     lastClicked = 'number'
//     input.textContent += numberValue
//   });
// });

// Array.from(symbols).forEach(function(numberElement) {
//   const symbolValue = numberElement.textContent
//   numberElement.addEventListener('click', function() {
//     if (lastClicked !== 'symbol') {
//       lastClicked = 'symbol'
//       input.textContent += symbolValue
//     }
//   })
// })

// document.querySelector('.clear').addEventListener('click', function () {
//     input.textContent = " "
// })

// input.addEventListener('keydown', ev => {
//   ev.preventDefault()
//   if(allowedNum.includes(ev.key)){
//     input.textContent += ev.key
//     return
//   }
//   if(allowedSimbols.includes(ev.key)){
//     input.textContent += ev.key
//     return
//   }
//   if(ev.key === 'Backspace'){
//     input.textContent = input.textContent.slice(0, -1)
//   }
//   if(ev.key === 'Enter'){
//     calculate()
//   }
// })

// document.querySelector('.equal').addEventListener('click', calculate)
// function calculate(){
//   try {
//     const result = eval(input.textContent)
//     input.textContent = result
//   } catch {
//     alert('Formato usado inválido.')
//     input.textContent = ''
//   }
// }