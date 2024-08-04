let balance = 0;
let deposit = 0;
let withdrawn = 0;
let option = 0;
let conf;

do{
  option = Number(prompt(`Enter your choice \n.1)Show Balance \n.2)Deposit \n.3)Withdraw \n.4)Stop`))
    switch(option){
      case 1:
        alert(`Your current balance is ${balance} Rupees`);
        break;
      case 2:
        deposit = Number(prompt("Enter the amount to deposit"));
        conf = confirm(`Do you want to Deposit ${deposit} ?`)
        if(conf){
          balance += deposit;
          alert(`Deposit Successful. Your new balance is ${balance} Rupees`);
        }
        break;
      case 3:
        withdrawn = Number(prompt("Enter the amount to withdraw"));
        conf = confirm(`Do you want to withdraw ${withdrawn} Rupees`);
        if(conf){
          if(withdrawn <= balance){
            balance -= withdrawn;
            alert(`Withdrawal Successful. Your new balance is ${balance} Rupees`);
          }else{
              alert("Insufficient Balance");
          }
        }
        break;
      default:
        alert("Invalid Option");
        break;
    }
}while(option != 4);