document.getElementById('donate-button').addEventListener('click', function(){
    btnHide('transaction-section');
    btnShow('donate-section');
    document.getElementById('donate-button').style.backgroundColor = '#b4f461';
    document.getElementById('history-button').style.backgroundColor = 'white';
});
document.getElementById('history-button').addEventListener('click', function(){
    btnShow('transaction-section');
    btnHide('donate-section');
    document.getElementById('donate-button').style.backgroundColor = 'white';
    document.getElementById('history-button').style.backgroundColor = '#b4f461';
});