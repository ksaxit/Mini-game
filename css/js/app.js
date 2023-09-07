const board = document.querySelector('#board')
const colors = ['red', 'white', '#00ffe6', '#8600a1']
const squares_number = 1000

for (let i = 0; i < squares_number; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(element) {
  const color = getColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}