console.log('functionality')

const moneyValue = $('.content')
console.log(moneyValue)

// const questionDisplay = $('.question-display')




//jeopardy = array with objects in it
//once click on grid square, lloks at $ amount on square & feed you random questions with that value
//math.random -->generate number of first index of array to the end of length
//search for random one, matches keep and display if not keep searching
  //target innerText -->give number in HTML


moneyValue.on('click', (event)=>{
    console.log(event.target.innerText)
    //when reading innerText value, matches value in obj display question
    
    if(event.target.innerText === jeopardy.value){
        $('.question-display').innerHTML(jeopardy.Math.random().question)
    }
    // questionDisplay.innerText(`${jeopardyCategories.question}`)
})






$('button').on('click', (event)=>{
    console.log(event.target.innerText)
    const text = $('input')
    // text.val(`${jeopardyCategories.answer}`)
})