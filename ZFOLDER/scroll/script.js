let container = document.querySelector('#scroll');

// body.addEventListener('scroll', (event) => {
//   const {scrollHeight, scrollTop, clientHeight} = event.target;

//   if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
//       console.log('scrolled');
//   }
// });


let newheight;
let create = ()=>{
  let div = document.createElement('div');
  div.classList.add('new')
  container.appendChild(div);
  console.log("new")
  newheight = Number(newheight) + Number(window.innerHeight) + 1000;
  console.log(newheight)
}

window.onscroll = function (ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    create();
  }
};