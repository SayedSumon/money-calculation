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
    const income = convertStringToNumber(incomeField);
    const foodCostField = document.getElementById('food-cost');
    const foodCost = convertStringToNumber(foodCostField);
    const rentCostField = document.getElementById('rent-cost');
    const rentCost = convertStringToNumber(rentCostField);
    const clothCostField = document.getElementById('cloth-cost');
    const clothCost = convertStringToNumber(clothCostField);

    const totalExpenses = foodCost + rentCost + clothCost ;
    const totalBalance = income - totalExpenses;

    setElementValueById('expenses', totalExpenses);
    setElementValueById('balance', totalBalance);
})

document.getElementById('saving-btn').addEventListener('click', function(){
    const savingField = document.getElementById('saving');
    const saving = convertStringToNumber(savingField);

    const balanceField = document.getElementById('balance');
    const balanceString = balanceField.innerText;
    const balance = parseFloat(balanceString);

    const totalSaving = (balance/100)*saving;

    setElementValueById('total-saving', totalSaving);

    const remainingBalance = balance - totalSaving;
    setElementValueById('remaining-balance', remainingBalance);
})