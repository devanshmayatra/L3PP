let poke_data = fetch("https://pokeapi.co/api/v2/pokemon/?limit=721");
let pics = document.querySelector("#pics");
let pop_up = document.querySelector('#pop_up');
let stat = document.querySelectorAll('.stat')
let ability = document.querySelector('#abilities')
let pokemon;


//second api call calls apis of individual pokemon
let createdata = (new_data) => {
  no_of_pokemon = new_data.count;
  pokemon = new_data.results;
  pokemon.forEach(element => {
    poke1 = element.name;
    url = element.url;
    pokemon_1 = fetch(url);
    new_poke(pokemon_1);
  });
}


//show data on the pokemon pop up
let pop_up_data = (data) => {
  let name = container.querySelector('#nama');
  let pic = container.querySelector('img');
  let index = container.querySelector('#index');
  let height = container.querySelector('#height');
  let weight = container.querySelector('#weight');
  let type = container.querySelectorAll('#type div');
  let nama = data.forms[0].name;
  pop_up.style.display = "flex";

  //to show height and weight
  let height1 = data.height;
  let weight2 = data.weight / 4.4805;

  height.innerHTML = height1 / 10
  weight.innerHTML = weight2.toFixed(1)

  //to show name
  name.innerHTML = nama.toUpperCase();

  //to show index
  index.innerHTML = `#` + data.id;

  //to show the picture/sprite
  pic.src = data.sprites.front_default;

  //to show type
  let base_type = data.types
  let i = 0;
  base_type.forEach((element) => {
    type[i].innerHTML = element.type.name.toUpperCase();
    i++
  })

  //to show stats
  let stats = data.stats
  let progress = document.querySelectorAll('progress')
  for (let i = 0; i < 6; i++) {
    stat[i].innerHTML = stats[i].base_stat;
    progress[i].value = stats[i].base_stat;
  }

  //to show abilities

  let abilities = data.abilities
  ability.innerHTML = "ABILITIES "
  abilities.forEach((element) => {
    let div = document.createElement('div')
    div.innerHTML = element.ability.name.toUpperCase();
    ability.append(div)
  })

}


//create the individual pokemon boxes
async function new_poke(pokemon_1) {
  try {
    let new_result = await pokemon_1;
    let new_pokes = await new_result.json();
    pic1 = new_pokes.sprites.front_default;
    let image = document.createElement('img');
    let data = document.createElement('div');
    let name = document.createElement('div');
    let type = document.createElement('div');
    let no = document.createElement('div');
    no.classList.add('no')
    type.classList.add('box_type')

    //adds pics to the pokemon box
    image.src = pic1

    no.innerHTML = '#' + new_pokes.id

    data.id = new_pokes.forms[0].name;

    data.classList.add('boxes');

    //adds name to the pokemon box
    name.innerHTML = new_pokes.forms[0].name.toUpperCase();
    name.classList.add('name');

    //saves the types of pokemon in an array
    let base_type = new_pokes.types

    setTimeout(() => {
      let i = 0;
      base_type.forEach((element) => {
        let type1 = document.createElement('div');
        type1.classList.add(`type${i}`);
        type1.innerHTML = element.type.name.toUpperCase();
        type.appendChild(type1)
        i++
      })
    }, 1000)

    data.append(image);
    data.append(no);
    data.append(name);
    data.append(type);
    pics.append(data);

  } catch (e) {
    console.log(e);
  }
}

//first api call calls the entire api
async function poke() {
  try {
    let result = await poke_data;
    let pokes = await result.json();;
    createdata(pokes);
  } catch (e) {
    console.log('error');
  }
}

poke();

let container = pop_up.querySelector("#container")


// used to fetch data for the pop up
async function pop_up_show(url) {
  try {
    let show = await url;
    let data = await show.json();
    pop_up_data(data);
  } catch (e) {
    console.log(e)
  }
}


//4th api call used for pop data retrieved data sent to pop_up_show to process 
document.addEventListener('click', (event) => {
  let parent = event.target.parentElement;
  pokemon.forEach((element) => {
    if (element.name === parent.id) {
      let url = element.url;
      let link = fetch(url);
      pop_up_show(link);
    }
  })

})

let input = document.querySelector('input')


//to Search pokemon
input.addEventListener('keyup', () => {
  let countries = document.querySelectorAll('.boxes .name');
  countries.forEach(element => {
    if (element.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
      element.parentElement.style.display = 'block';
    } else {
      element.parentElement.style.display = 'none';
    }
  });
})


//to hide pop up and its data
pop_up.addEventListener('click', () => {
  pop_up.style.display = "none";
  type_1.innerHTML = 'NONE';
  type_2.innerHTML = 'NONE';
  for (let i = 0; i < 6; i++) {
    stat[i].innerHTML = 0
  }
  ability.innerHTML = ' '
})



//to go to next pokemon
let next = document.querySelector('#next');

next.addEventListener('click', () => {
  let id = document.querySelector('#index').innerHTML;

  let new_id = Number(id.match(/\d+/)[0]);

  if(new_id == 721){
    new_id = 0
  }
  let url = fetch(`https://pokeapi.co/api/v2/pokemon/${new_id + 1}`)
  pop_up_show(url)
})


//to go to prev pokemon
let prev = document.querySelector('#prev');

prev.addEventListener('click', () => {
  let id = document.querySelector('#index').innerHTML;

  let new_id = Number(id.match(/\d+/)[0]);

  if(new_id == 1){
    alert('You are at the first pokemon')
  }
  else{
    let url = fetch(`https://pokeapi.co/api/v2/pokemon/${new_id - 1}`)
  pop_up_show(url)
  }

  
})