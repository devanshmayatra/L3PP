let open_upi = document.querySelector('#upi');
let open_cc = document.querySelector('#CC');
let back = document.querySelectorAll('.back');
let balance_input = 0;

let upi_transaction_history = [];

const switch_upi = function(){
  let page_0 = document.querySelector('#page_0');
  let page_1 = document.querySelector('#page_1');

  page_0.style.display = 'none';
  page_1.style.display = 'flex';

};

const switch_cc = function(){
  let page_0 = document.querySelector('#page_0');
  let page_2 = document.querySelector('#page_2');

  page_0.style.display = 'none';
  page_2.style.display = 'flex';

};

const home = function(){
  let page_0 = document.querySelector('#page_0');
  let page_1 = document.querySelector('#page_1');
  let page_2 = document.querySelector('#page_2');

  page_0.style.display = 'flex';
  page_1.style.display = 'none';
  page_2.style.display = 'none';
  
};

open_upi.addEventListener('click' ,switch_upi );
open_cc.addEventListener('click' ,switch_cc );
back[0].addEventListener('click' ,home );
back[1].addEventListener('click' ,home );

let add = document.querySelector('#add');
let withdraw = document.querySelector('#withdraw');


add.addEventListener('click',function(){
  let amount = Number(add_money.value);

  if(amount == 0)
    alert(`Please enter an amount`);
  else{
    balance_input += amount;
    let balance = document.querySelector('#balance');
    balance.innerHTML = balance_input + " Rs";
    upi_transaction_history.push(`Deposited Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    
    let upi_history = document.querySelector('#upi_history_container');
    
    const row = document.createElement('div')
      row.innerHTML = `Deposited Amount ${amount} on ${new Date().toISOString().split('T')[0]}`;
      row.className = 'data';
      upi_history.appendChild(row);
  }
  
  document.querySelector('#add_money').value = ' ';

})

withdraw.addEventListener('click',function(){
  let amount = Number(withdraw_money.value);
  
  if(balance_input == 0 || balance_input < amount)
    alert("You don't have any balance");
  else if(amount == 0)
      alert(`Please enter an amount`);
  else if(balance_input >= amount){
    balance_input -= amount;
    let balance = document.querySelector('#balance');
    balance.innerHTML = balance_input + " Rs";
    upi_transaction_history.push(`Withdrew Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    
    let upi_history = document.querySelector('#upi_history_container');
    
    const row = document.createElement('div')
      row.innerHTML = `Withdrew Amount ${amount} on ${new Date().toISOString().split('T')[0]}`;
      row.className = 'data';
      upi_history.appendChild(row);
  }
  
  document.querySelector('#withdraw_money').value = ' ';

})

let pay = document.querySelector('#pay');
let buy = document.querySelector('#buy');
let limit_input = 100000;
let cc_transaction_history = [];
let bill_calc = 0;


pay.addEventListener('click',function(){
  let amount = Number(pay_bill.value);
  
  
  if(amount == 0){
    alert(`Please enter an amount`);
  }
  else if(amount > bill_calc){
    alert(`Do you have more money than you need ?`)
  }
  else if(amount <= bill_calc){
    limit_input += amount;
    bill_calc = bill_calc - amount;

    let limit = document.querySelector('#limit');
    limit.innerHTML = limit_input + " Rs";
    let bill = document.querySelector('#bill');
    bill.innerHTML = bill_calc + " Rs";
    cc_transaction_history.push(`Payed Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    
    let cc_history = document.querySelector('#cc_history_container');
    
    const row = document.createElement('div')
      row.innerHTML = `Payed Amount ${amount} on ${new Date().toISOString().split('T')[0]}`;
      row.className = 'data';
      cc_history.appendChild(row);
      
  }
  
  
  document.querySelector('#pay_bill').value = ' ';

})

buy.addEventListener('click',function(){
  let amount = Number(buy_something.value);
  
  
  if(amount == 0)
    alert('Please enter an amount');
  else if(amount > limit_input)
    alert(`You dont have enough balance !`);
  else{
    limit_input -= amount;
    bill_calc = bill_calc + amount;
    let limit = document.querySelector('#limit');
    limit.innerHTML = limit_input + " Rs";
    let bill = document.querySelector('#bill');
    bill.innerHTML = bill_calc + " Rs";
    cc_transaction_history.push(`Used Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    
    let cc_history = document.querySelector('#cc_history_container');
    
    const row = document.createElement('div')
      row.innerHTML = `Withdrew Amount ${amount} on ${new Date().toISOString().split('T')[0]}`;
      row.className = 'data';
      cc_history.appendChild(row);
  }
  console.log(bill_calc)
  
  document.querySelector('#buy_something').value = ' ';

})