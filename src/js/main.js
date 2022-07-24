


// get the references
const floorInput = document.getElementById('floor-input');
const LiftInput = document.getElementById('lift-input');
const submitButton = document.getElementById('submit-btn');


//on Submit button add values 
submitButton.addEventListener('click' , () => {


          

           
        //for loop to generate the floors
        for(let i = floorInput.value; i > 0 ; i--){

            //Function to genereate floors
            createFloors(floorInput.value , LiftInput.value);
        }
})
