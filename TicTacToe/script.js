let game_box = document.querySelector('#game')
let boxes = document.querySelectorAll('.boxes')
let change = 0;
let turns = 1;

let check = {
  win:(id,turn)=>{
    if(turn > 4){
      if(boxes[0].innerText == boxes[1].innerText == boxes[2].innerText)
        console.log('you win')
    }
  }
}

game_box.addEventListener('click', (event) => {
  let put = event.target;
  if(change){
    put.innerHTML = 'O';
    check.win(put.id,turns);
    change = 0;
    turns++;
  }
  else{
    put.innerHTML = 'X';
    check.win(put,turns);
    change = 1;
    turns++;
  }
  
  console.log(put);
})