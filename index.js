
class Calculator{
    constructor (previousInput, currentInput){
        this.previousInput = previousInput
        this.currentInput = currentInput
        
        this.clearScreen()
    }

    clearScreen(){
        this.firstInput = ''
        this.secondInput = ''
        this.operator = ''
    }
    appendNumbers(number){
      if ( number === '.' && this.firstInput.includes('.')) return; 
      
             this.firstInput = this.firstInput.toString() + number.toString()
        if (this.firstInput.toString().length > 9)
            this.firstInput = this.firstInput.substr(0,9);
        

    }

   currentNumbers(){
       
       this.currentInput.innerText = this.firstInput
       if (this.operator != ''){

        this.previousInput.innerText = this.secondInput    
       }
    }
       

   chooseOperation(operator){
       this.operator = operator
       
       if(this.firstInput === "")return
       if (this.secondInput != ""){
        this.computeAnswer()
       }
       
       this.secondInput = this.firstInput
       this.firstInput = ''
   }
        
       computeAnswer() {

        if (this.firstInput === '') return
        let firstNum = parseFloat(this.firstInput)
        let secondNum = parseFloat(this.secondInput)
        
        let finalAnswer;
        switch(this.operator){
            case '+': finalAnswer = firstNum + secondNum
            break
            case '-': finalAnswer = secondNum - firstNum
            break
            case '÷': finalAnswer = firstNum / secondNum
            break
            case '×': finalAnswer = secondNum * firstNum
            break
            default: return
            

        }
        this.firstInput = finalAnswer
        this.secondInput = ''
        this.operator = undefined
       }



       removeNumber(){
           if (this.firstInput != ""){
               this.firstInput = this.firstInput.toString().slice(0, -1)
           }

       }
    
}




const previousInput = document.querySelector('[data-previous-input]')
const currentInput = document.querySelector('[data-active-input]')
const activeButton = document.querySelectorAll('[data-number]')
const activeOperator = document.querySelectorAll('[data-operator]')
const computeButton = document.querySelector('[data-compute]')
const clearScreen = document.querySelector('[data-clear-screen]')
const deleteNumber = document.querySelector('[data-delete]')
// let firstInput = ""
// let secondInput = ""

const myCalculator = new Calculator(previousInput, currentInput);

activeButton.forEach(button => {
    button.addEventListener('click', function(){
       myCalculator.appendNumbers(button.innerText)
        myCalculator.currentNumbers();
    }
   

    )

})

clearScreen.addEventListener('click', () => {

 myCalculator.clearScreen()
 myCalculator.currentNumbers()

})
deleteNumber.addEventListener('click', button => {

    myCalculator.removeNumber();
    myCalculator.currentNumbers();

})
activeOperator.forEach(operator => {
    operator.addEventListener ('click', () =>{
        myCalculator.chooseOperation(operator.innerText)
        myCalculator.currentNumbers();
    })
})

computeButton.addEventListener('click', () =>{
    
    myCalculator.computeAnswer();
    myCalculator.currentNumbers();

})