
document.getElementById('show-add-money-form')
.addEventListener('click',function(event){
    event.preventDefault();
    console.log('show add money button clicked');
    showSectionById('add-money-form');
})

document.getElementById('show-add-money-form')
.addEventListener('click',function(){
    showSectionById('add-money-feni');
})

document.getElementById('show-add-money-form')
.addEventListener('click',function(){
    showSectionById('add-money-quota');
})

document.getElementById('show-transaction-history')
.addEventListener('click',function(){
    showSectionById('transaction-section');
})
