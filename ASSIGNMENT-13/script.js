let uname = document.querySelector('#uname')
let pass = document.querySelector('#pass')
let enter = document.querySelector('#enter')
let login = document.querySelector('#page_1')
let home = document.querySelector('#page_2')
let box = document.querySelector('#box')
let log_out = document.querySelectorAll('.log_out')
let container_5 = document.querySelector('#container_5');
let amount ;

let open_upi = document.querySelector('#upi_entry')
let open_credit = document.querySelector('#credit_entry')
let open_transaction = document.querySelector('#transactions')
let back = document.querySelectorAll('.back');

const switch_upi = () =>{
  let page_2 = document.querySelector('#page_2');
  let page_3 = document.querySelector('#page_3');

  page_2.style.display = 'none';
  page_3.style.display = 'flex';
}

const logout = () =>{
  let page_1 = document.querySelector('#page_1');
  let page_2 = document.querySelector('#page_2');
  let page_3 = document.querySelector('#page_3');
  let page_4 = document.querySelector('#page_4');
  let page_5 = document.querySelector('#page_5');

  page_1.style.display = 'flex';
  page_2.style.display = 'none';
  page_3.style.display = 'none';
  page_4.style.display = 'none';
  page_5.style.display = 'none';
  box.style.display = 'none'
  localStorage.setItem('login',0)
}

const switch_cc = function(){
  let page_2 = document.querySelector('#page_2');
  let page_4 = document.querySelector('#page_4');

  page_2.style.display = 'none';
  page_4.style.display = 'flex';

};

const switch_trnsc = function(){
  let page_2 = document.querySelector('#page_2');
  let page_5 = document.querySelector('#page_5');

  page_2.style.display = 'none';
  page_5.style.display = 'flex';

};


const return_home = function(){
  let page_2 = document.querySelector('#page_2');
  let page_3 = document.querySelector('#page_3');
  let page_4 = document.querySelector('#page_4');
  let page_5 = document.querySelector('#page_5');

  page_2.style.display = 'flex';
  page_3.style.display = 'none';
  page_4.style.display = 'none';
  page_5.style.display = 'none';
};

open_upi.addEventListener('click' ,switch_upi );
open_credit.addEventListener('click' ,switch_cc );
open_transaction.addEventListener('click',switch_trnsc)
back[0].addEventListener('click' ,return_home );
back[1].addEventListener('click' ,return_home );
back[2].addEventListener('click' ,return_home );

for(let i = 0;i<=3;i++){
  log_out[i].addEventListener('click',logout)
}

let transaction_history = JSON.parse(localStorage.getItem('transaction_history'));

let functions = {

  timeout: ( count)=>{ 
    setTimeout(function() {
      localStorage.setItem('login', 0)
      uname.placeholder = 'Enter Username'
      pass.placeholder = 'Enter Password'
      functions.login();
      alert(`You have been Logged out due to inactivity`)
    }, count);
  },

  login: () => {
    if(localStorage.login == 1){
      login.style.display = 'none'
      home.style.display = 'flex'
      box.style.display = 'flex'
      functions.timeout(300000);
    }
    else{
      login.style.display = 'flex'
      home.style.display = 'none'
      box.style.display = 'none'
      page_3.style.display= 'none'
      page_4.style.display= 'none'
      page_5.style.display= 'none'

    }
  },

  print:()=>{
    const row = document.createElement('div')
      row.innerHTML = `Deposited Amount ${amount} on ${new Date().toISOString().split('T')[0]}`;
      row.className = 'data';
      container_5.appendChild(row);
  },

  printall:()=>{
    let history = JSON.parse(localStorage.transaction_history)
    history.forEach(element => {
      const row = document.createElement('div')
      row.innerHTML = element
      row.className = 'data';
      container_5.appendChild(row);    
    });
  }
}

functions.login();
functions.printall();

enter.addEventListener('click',() => {
  if(uname.value == 'admin' && pass.value == 'admin') {
    localStorage.setItem('login', 1)
    functions.login();
    if(transaction_history){
      transaction_history = JSON.parse(transaction_history);
      functions.printall();
    }
    else{
      transaction_history = [];
    }
    uname.value = ''
    pass.value = ''
  }
  else{
    localStorage.setItem('login', 0)
    functions.login();
    uname.value = ''
    pass.value = ''
    uname.placeholder = 'Wrong Username'
    pass.placeholder = 'Wrong password'
    functions.timeout(5000);
  }
})

let add = document.querySelector('#add');
let withdraw = document.querySelector('#withdraw');
let balance = document.querySelector('#amount');

if(!localStorage.getItem('Balance')){
  localStorage.setItem('Balance',0)
}

let balance_input = Number(localStorage.Balance);
balance.innerHTML = Number(localStorage.Balance);
localStorage.setItem('Balance',balance_input)

add.addEventListener('click',function(){
  amount = Number(add_money.value);
  let alert = upi_add.querySelector('.alert')

  if(amount == 0){
    alert.style.display = 'block'
  }
    
  else{
    alert.style.display = 'none'
    balance_input += amount;

    balance.innerHTML = balance_input;
    transaction_history.push(`Deposited Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    localStorage.setItem('transaction_history',JSON.stringify(transaction_history))
    localStorage.setItem('Balance',balance_input)
    
    functions.print();
  }
  
  document.querySelector('#add_money').value = '';

})

withdraw.addEventListener('click',function(){
  amount = Number(withdraw_money.value);
  let alert = upi_wthdrw.querySelector('.alert')
  let alert_1 = upi_wthdrw.querySelector('.alert_1')
  
  
  if(balance_input == 0 || balance_input < amount)
    alert_1.style.display = 'block'
  else if(amount == 0)
    alert.style.display = 'block'
  else if(balance_input >= amount){
    alert_1.style.display = 'none'
    alert.style.display = 'none'
    balance_input -= amount;
    balance.innerHTML = balance_input;
    transaction_history.push(`Withdrew Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    localStorage.setItem('transaction_history',JSON.stringify(transaction_history))
    localStorage.setItem('Balance',balance_input)
    
    functions.print();
  }

  document.querySelector('#withdraw_money').value = '';
})

if(!localStorage.getItem('limit')){
  localStorage.setItem('limit',100000)
}

if(!localStorage.getItem('bill')){
  localStorage.setItem('bill',0)
}

let pay = document.querySelector('#pay');
let buy = document.querySelector('#buy');
let limit_input =  localStorage.limit;
let bill_calc =Number(localStorage.bill);
let limit = document.querySelector('#amount2');
limit.innerHTML = limit_input;
let bill = document.querySelector('#amount3');
bill.innerHTML = bill_calc;

pay.addEventListener('click',function(){
  amount = Number(pay_bill.value);
  let alert = bill_pay.querySelector('.alert')
  let alert_1 = bill_pay.querySelector('.alert_1')
  
  if(amount == 0){
    alert.style.display = 'block'
  }
  else if(amount > bill_calc){
    alert_1.style.display = 'block'
  }
  else if(amount <= bill_calc){
    alert.style.display = 'none'
    alert_1.style.display = 'none'
    bill_calc = bill_calc - amount;
    bill.innerHTML = bill_calc;
    localStorage.setItem('bill',bill_calc)
    localStorage.setItem('limit',limit_input)
    transaction_history.push(`Withdrew Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    localStorage.setItem('transaction_history',JSON.stringify(transaction_history))
    
    functions.print();
  }
  if(limit_input == 0){
    limit_input = 100000;
    localStorage.setItem('limit',limit_input)
    limit.innerHTML = limit_input;
  }

  document.querySelector('#pay_bill').value = '';
})

buy.addEventListener('click',function(){
  amount = Number(buy_something.value);
  let alert = something_to_buy.querySelector('.alert')
  let alert_1 = something_to_buy.querySelector('.alert_1')
  
  if(amount == 0)
    alert.style.display = 'block'
  else if(amount > limit_input)
    alert_1.style.display = 'block'
  else{
    alert.style.display = 'none'
    alert_1.style.display = 'none'
    limit_input -= amount;
    bill_calc = bill_calc + amount;
    let limit = document.querySelector('#amount2');
    limit.innerHTML = limit_input;
    let bill = document.querySelector('#amount3');
    bill.innerHTML = bill_calc;
    localStorage.setItem('bill',bill_calc)
    localStorage.setItem('limit',limit_input)
    transaction_history.push(`Bought for the Amount ${amount} on ${new Date().toISOString().split('T')[0]}`);
    localStorage.setItem('transaction_history',JSON.stringify(transaction_history))
    
    functions.print();
  }
  document.querySelector('#buy_something').value = '';
})