let container = document.querySelector('#container');
let button = document.querySelector('#click')
let show = document.querySelector('#no10')

let count = 0;
let index = 0;

container.addEventListener('click',()=>{
  let array = document.querySelectorAll('.images')
  array[count].style.animation = 'load 0.3s linear 0s 1'
  array[count].style.zIndex = index;
  for(let i = 0;i < array.length;i++){
    console.log('hi')
    if(array[i] == array[count]){
      array[i].style.display = 'block'
      console.log(i,'this')
    }
    else{
      array[i].style.display = 'none'
      console.log(i)
    }
  }
  count++;
  index++;
  if(count == array.length){
    count = 0;
    array.forEach(ele =>{
      ele.style.animation = 'none'
    })
  }
  if(index == 10){
    array.forEach(element => {
      element.style.zIndex = 0;
    });
    index = 1;
  }
})

button.addEventListener('click',()=>{
  let news  = show.style.display;
  if(news == 'none'){
    show.style.display = 'block'
  }
  else{
    show.style.display = 'none'
  }
})

show.addEventListener('click',()=>{
  console.log('new')
  let news  = show.style.display;
  if(news == 'block'){
    show.style.display = 'none '
  }
})