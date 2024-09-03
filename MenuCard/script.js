let add_food = document.querySelectorAll('.add_to_cart')
console.log(add_food)
let bill = document.querySelector('#bill');
let show = 1;
let index_food = 1;

let orders = []; 

let find_index = add_food.forEach((index,i) => {
  return i;
})

add_food[0].addEventListener('click',function(){
  // let parent = add_food[0].parentElement;
  let dish_name =  document.querySelector('.dish_name').innerText;
  let dish_price =  document.querySelector('.dish_price').innerText;
  console.log(dish_name,dish_price);
  orders.push(`${index_food} ${dish_name}  \t    ${dish_price}   1`);
  const row = document.createElement('div')
    row.innerHTML = `${index_food} ${dish_name}    ${dish_price}  \t 1`;
    row.className = 'data';
    bill.appendChild(row);
    index_food++;
})

let show_bill = document.querySelector('#show_orders');
show_bill.addEventListener('click',function(){
  if(show == 1){
    bill.style.display = 'flex';
  }
  else if(show == 0){
    bill.style.display = 'none';
    show = 1;
  }
  show = 0
})