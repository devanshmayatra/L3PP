let c;
let co;
let cont = 1;

do{
  let a = Number(prompt("Enter number 1"));
  let b = Number(prompt("Enter number 2"));
  let op = prompt("Enter the operation you want to perform \n.1)ADDITION(+) \n.2)SUBTRACTION(-) \n.3)MULTIPLICATION(*) \n.4)DIVISION(/)");
  switch(op){
    case '1':
    case "+":
      co = confirm(` Do you want to perform ${a} + ${b}`);
      if(co){
        c=a+b;
        alert(`The result is ${c}`);
      }
      else
        continue;
      cont = prompt(`Do you want to Continue (Yes/No)(1/0)`)
      break;
    case '2':
    case "-":
      co = confirm(` Do you want to perform ${a} - ${b}`);
      if(co){
        c=a-b;
        alert(`The result is ${c}`);
      }
      else
        continue;
      cont = prompt(`Do you want to Continue (Yes/No)(1/0)`);
      break;
    case '3':
    case "*":
      co = confirm(` Do you want to perform ${a} * ${b}`);
      if(co){
        c=a*b;
        alert(`The result is ${c}`);
      }
      else
        continue;
      cont = prompt(`Do you want to Continue (Yes/No)(1/0)`);
      break;
    case '4':
    case "/":
      co = confirm(` Do you want to perform ${a} / ${b}`);
      if(co){
        c=a/b;
        alert(`The result is ${c}`);
      }
      else
        continue;
      cont = prompt(`Do you want to Continue (Yes/No)(1/0)`);
      break;
    default :
      alert(`please Enter valid operation`);
  }
}while(cont == 1);


