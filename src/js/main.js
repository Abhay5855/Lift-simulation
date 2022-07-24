// get the references
const floorInput = document.getElementById('floor-input')
const LiftInput = document.getElementById('lift-input')
const submitButton = document.getElementById('submit-btn')
const container = document.getElementById('container')
const liftContainer = document.createElement('div')

//on Submit button add values
submitButton.addEventListener('click', () => {
  //for loop to generate the floors
  for (let i = floorInput.value; i > 0; i--) {
    //Function to genereate floors
    createFloors(i, LiftInput.value)
  }
})

// Function to create floors

function createFloors(floors, lifts) {
 
  let floorContainers = document.createElement('div')

  floorContainers.classList.add('floor-div')

  let buttonDiv = document.createElement('div')

  let UpButton = document.createElement('button')
  let DownButton = document.createElement('button')

  UpButton.innerText = 'UP'
  DownButton.innerText = 'Down'

  buttonDiv.appendChild(UpButton)
  buttonDiv.appendChild(DownButton)

  floorContainers.appendChild(buttonDiv)

  let p = document.createElement('h4')

  p.innerText = `Floor no ${floors}`

  buttonDiv.appendChild(p)

   //Loop to generate the lifts 
  for (let j = 0; j < lifts; j++) {
    if (floors === 1) {
      let Lifts = document.createElement('div')

      Lifts.classList.add('lift-div')

      liftContainer.appendChild(Lifts)

      liftContainer.classList.add('lift')

      buttonDiv.appendChild(liftContainer)

    }
  }

  container.appendChild(floorContainers)
}
