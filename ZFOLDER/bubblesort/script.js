let array= [];
let items = document.querySelectorAll('input')
let flag, temp;
let button = document.querySelector('button')

let enter = () => {
  array[0] = items[0].value
  array[1] = items[1].value
  array[2] = items[2].value
  array[3] = items[3].value
  array[4] = items[4].value
}

button.addEventListener('click', () => {
  enter();
  let n = array.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      flag = 0;
      setInterval(() => {
        if (array[j] > array[j + 1]) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          flag = 1;
          items[0].value = array[0]
          items[1].value = array[1]
          items[2].value = array[2]
          items[3].value = array[3]
          items[4].value = array[4]
        }
      }, 2000)
    }
    if (flag == 0)
      break;
  }
  console.log(array)
})

