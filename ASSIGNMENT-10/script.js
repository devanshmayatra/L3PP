let upi = {
  balance : 0,
  withdrawn : 0,
  deposited : 0,
  transactions : [" "],

  showBalance : function () {
    alert(`Your current Balance is ${this.balance}`);
  },

  deposit : function() {
    let amount = prompt("Enter the amount to deposit: ");
    this.balance += parseFloat(amount);
    this.deposited += parseFloat(amount);
    alert(`Deposit Successful. Your new balance is ${this.balance}`);
    this.transactions.push(`Deposit of ${amount} was made, on ${new Date().toISOString().split('T')[0]}, Balance : ${this.balance}`);
  },
  

  withdraw : function () {
    let amount = prompt("Enter the amount to withdraw");

    if (amount > this.balance) {
      alert("Insufficient balance");

    } else {
      this.balance -= amount;
      this.withdrawn += amount;
      alert(`Withdrawn ${amount}. Remaining balance is ${this.balance}`);
      this.transactions.push(`Withdrawal of ${amount} was made, on ${new Date().toISOString().split('T')[0]}, Balance : ${this.balance}`);
    }
  },

  show_transactions: function(){
    alert(`Transaction history is as follows:\n${this.transactions.join("\n")}`);
  }

}


function addMoney(){
  upi.deposit();
}

function showcash(){
  upi.showBalance();
}

function withdrawmoney(){
  upi.withdraw();
}

function upi_transactions(){
  upi.show_transactions();
}



let creditCard = {
  limit : 100000,
  bill : 0,
  pending_balance : 100000,
  buy : 0,
  transactions : [],

  showPending : function(){
    alert(`Your pending balance is ${this.pending_balance}`)
  },

  payBill : function(){
    alert(`Your current bill is Rs. ${this.bill}`);
    
    if(this.bill !== 0){
      let amount = parseFloat(prompt("Enter the amount to pay"));

      if(amount > this.bill){
        alert("Jyada paisa bharna hai kya ?");

      }else if(amount < this.bill){
        this.bill -= amount;
        this.pending_balance += amount; 
        this.transactions.push(`Payed bill of: Rs. ${amount}  Balance remaining: ${this.pending_balance} Pending bill: ${this.bill}`);
      }
      else if(amount == this.bill){
        this.bill = 0;
        this.pending_balance = this.limit;
        alert("Sab paisa bhar diya abh !");
        this.transactions.push(`Payed bill of: Rs. ${amount}  Balance remaining: ${this.pending_balance} Pending bill: ${this.bill}`);
      }
    }
  },

  buyStuff : function(){
    let amount = parseFloat(prompt("Enter the cost of the item you want to buy"));

    if(amount > this.pending_balance){
      alert("Paisa nahi hai abhi !");
      
    }else{
      this.buy += amount;
      this.pending_balance -= amount;
      this.bill += amount;
      alert(`You have bought something worth ${amount}. Your pending balance is ${this.pending_balance}`);
      this.transactions.push(`Used ${amount} to buy, Balance remaining ${this.pending_balance}, Pending bill ${this.bill}`)
    }
  },
          
  checkLimit : function (){
    alert(`Your credit limit is ${this.limit}`);
  },

  show_transactions : function(){
    alert(`Transactions are as follows:\n${this.transactions.join("\n")}`);
  }

}


function pendingMoney(){
  creditCard.showPending();
}

function paisabhar(){
  creditCard.payBill();
}

function shopping(){
  creditCard.buyStuff();
}

function showLimit(){
  creditCard.checkLimit();
}

function cc_transactions(){
  creditCard.show_transactions();
}