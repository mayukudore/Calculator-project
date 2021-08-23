
class Calculator{
    constructor (previousInput, currentInput){
        this.previousInput = previousInput
        this.currentInput = currentInput
        
        this.clearScreen()
    }

    clearScreen(){
        this.firstInput = ''
        this.secondInput = ''
        this.operator = undefined
    }
    appendNumbers(number){
      if (this.firstInput.includes('.') && number === '.') return 
        this.firstInput = this.firstInput.toString() + number.toString()

    }

   currentNumbers(){
       
       this.currentInput.innerText = this.firstInput
       if (this.operator != null){

        this.previousInput.innerText = this.secondInput1    
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
deleteNumber.addEventListener('click', () => {

    myCalculator.removeNumber();
    myCalculator.currentNumbers();

})