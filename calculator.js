let calculation = localStorage.getItem('result') || '';
    displayCalculation();

    function updateCalculation(operator){
            calculation = calculation + operator;
            console.log(calculation);
            localStorage.setItem('result',calculation);
            displayCalculation();
    }

    function displayCalculation(){
        document.querySelector('.js-display').innerHTML = calculation;
    }