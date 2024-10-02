const newDate = new Date();
// Donation or add money
document.getElementById('btn-add-noakhali')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('input-add-noakhali');
    const noakhaliBalance = getTextFieldValueById ('noakhali-balance');

    console.log(noakhaliBalance, addMoney);
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
     const balance=getTextFieldValueById('account-balance');
    const newBalance=balance - addMoney;
     const newNoakhaliBalance = addMoney + noakhaliBalance;

     if(addMoney > balance){
        alert('You do not have enough balance .');
        return;
    }

    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

    // add to transaction history
    const p =document.createElement('p');
    p.innerText=`Added:${addMoney} Tk. New Balance:${newBalance} Date: ${newDate}`;
    // should be a common function
    document.getElementById('transaction-container').appendChild(p);

})

// Donation or add money
document.getElementById('btn-add-feni')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('input-add-feni');
    const noakhaliBalance = getTextFieldValueById ('feni-balance');

    console.log(noakhaliBalance, addMoney);
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

     const balance=getTextFieldValueById('account-balance');
    const newBalance=balance - addMoney;
     const newNoakhaliBalance = addMoney + noakhaliBalance;

     if(addMoney > balance){
        alert('You do not have enough balance .');
        return;
    }

    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('feni-balance').innerText = newNoakhaliBalance;

    // add to transaction history
    const p =document.createElement('p');
    p.innerText=`Added:${addMoney} Tk. New Balance:${newBalance} Date: ${newDate}`;

    // should be a common function
    document.getElementById('transaction-container').appendChild(p);

})

// Donation or add money
document.getElementById('btn-add-quota')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney=getInputFieldValueById('input-add-quota');
    const noakhaliBalance = getTextFieldValueById ('quota-balance');

    console.log(noakhaliBalance, addMoney);
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

     const balance=getTextFieldValueById('account-balance');
    const newBalance=balance - addMoney;
     const newNoakhaliBalance = addMoney + noakhaliBalance;

     if(addMoney > balance){
        alert('You do not have enough balance .');
        return;
    }

    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('quota-balance').innerText = newNoakhaliBalance;

    // add to transaction history
    const p =document.createElement('p');
    p.innerText=`Added:${addMoney} Tk. New Balance:${newBalance} Date: ${newDate}`;

    // should be a common function
    document.getElementById('transaction-container').appendChild(p);

})