function convertStringToNumber(element){
    const String = element.value;
    const number = parseFloat(String);
    return number;
}

function setElementValueById(elementId, value){
    const setValue = document.getElementById(elementId);
    setValue.innerText = value;    
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const incomeField = document.getElementById('income');
    required(incomeField);
    const income = convertStringToNumber(incomeField);
    numberRequired(income);
    const foodCostField = document.getElementById('food-cost');
    required(foodCostField);
    const foodCost = convertStringToNumber(foodCostField);
    numberRequired(foodCost);
    const rentCostField = document.getElementById('rent-cost');
    required(rentCostField);
    const rentCost = convertStringToNumber(rentCostField);
    numberRequired(rentCost);
    const clothCostField = document.getElementById('cloth-cost');
    required(clothCostField);
    const clothCost = convertStringToNumber(clothCostField);
    numberRequired(clothCost);

    

    const totalExpenses = foodCost + rentCost + clothCost ;
    const totalBalance = income - totalExpenses;

    if(totalExpenses > income){
        alert('Cannot spend more than income');
    }else{
        setElementValueById('expenses', totalExpenses);
        setElementValueById('balance', totalBalance);
    }
       
})

document.getElementById('saving-btn').addEventListener('click', function(){
    const savingField = document.getElementById('saving');
    required(savingField);
    const saving = convertStringToNumber(savingField);
    numberRequired(saving);

    const incomeField = document.getElementById('income');
    const incomeString = incomeField.value;
    const income = parseFloat(incomeString);

    const balanceField = document.getElementById('balance');
    const balanceString = balanceField.innerText;
    const balance = parseFloat(balanceString);
    
    const totalSaving = (income/100)*saving;
    const remainingBalance = balance - totalSaving;

    if(saving > 100){
        alert('It is not possible to save more than 100%');
    }
    else if(totalSaving > balance){
        alert('You cannot save more than your balance');
    }
    else{
        setElementValueById('total-saving', totalSaving);
        setElementValueById('remaining-balance', remainingBalance);
    }
    
})