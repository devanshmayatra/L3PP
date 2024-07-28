let input = document.querySelector('#country_input')

input.addEventListener('click',() => {
  let box = document.querySelector('#country_box')
  box.style.display = 'block'
})

input.addEventListener('keyup',() => {
  let countries = document.querySelectorAll('.country')
  countries.forEach(element => {
    if(element.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
      element.style.display = 'block'
    }else{
      element.style.display = 'none'
    }
  });
})


let button = document.querySelector('button')

button.addEventListener('click',() => {
    let addCountry = document.querySelector('#add_country')
    let add_country = addCountry.value
    let row = document.createElement('option')
    row.innerHTML = add_country;
    row.classList.add('country')
    document.querySelector('#country_box').appendChild(row)
    console.log(`country added`)
    addCountry.value = ''

})