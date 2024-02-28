// console.log(jeopardy)

// console.log(jeopardy[0].question)
// console.log(jeopardy[1].question)


const moneyScore = $('#score')
const categoryOptions = $('.content')
const questionDisplay = $('.question-display')

const answerBox = $('#user-answer')
const submitButton = $('#submit-button')

let score = 0




//jeopardy = array with objects in it
//once click on grid square, lloks at $ amount on square & feed you random questions with that value
//math.random -->generate number of first index of array to the end of length
//search for random one, matches keep and display if not keep searching
  //target innerText -->give number in HTML




categoryOptions.on('click', (event)=>{
    console.log(event.target.innerText)
    //when reading innerText value, matches value in obj --> display question
    let randomizeIndex = Math.floor(Math.random() * Object.values(jeopardy).length)
    let questionValue = jeopardy['value']
    if(event.value === questionValue){
        questionDisplay.html(jeopardy[randomizeIndex].question)

    }
   
    //work out logic for text box
  //have click listener on submit inside of this case
   //if this is correct question, sumbit button and text boxes work
   //when its clicked do check --> if it is correct add to total 
   //if not subtract score from total
$('button').on('click', (event)=>{
    console.log(event.target.innerText)
    const text = $('input')
    // text.val(`${jeopardyCategories.answer}`)
})
   
  
 
   
  
   
   
})
   







