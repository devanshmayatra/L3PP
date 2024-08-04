const apicall = fetch(`https://jsonplaceholder.typicode.com/posts`);
const container = document.querySelector('#tweets_for_you');
const section = document.querySelector('#sections');
const container_2 = document.querySelector('#tweets_following');
const folloing = document.querySelector('#following');
const showborder = document.querySelector('#for_you_underline');
const showborder2 = document.querySelector('#following_underline');
const profile_pic = document.querySelector('#profile_pic');
const switch_mode = document.querySelector('#mode');
const body = document.querySelector('body');
const nav = document.querySelector('#bottom_navigation');
const profile = document.querySelector('#profile');
showborder.style.display = 'block'
showborder2.style.display = 'none'

const start_page = document.querySelector('#log');
const create_account = document.querySelector('#create_account');
const login = document.querySelector('#login');
const home = document.querySelector('#container');


const create_acc = document.querySelector('#create_acc');
const log_in = document.querySelector('#log_in');

const back = document.querySelectorAll('.cancel');
const enter_1 = document.querySelector('.enter');
const enter_2 = document.querySelector('.enter2');
const logout = document.querySelector('#log_out')

const alert1 = document.querySelector('#alert1')
const alert2 = document.querySelector('#alert2')

let name_disp = document.querySelector('#name')
let uname_disp = document.querySelector('#uname')

const pic = document.querySelector('#i');
const bottom_bar = document.querySelector('#bottom_bar');

const profile_on = document.querySelectorAll('.profile_pic_2');


profile_on[0].addEventListener('click', () => {
  operations.pro();
})

profile_on[1].addEventListener('click', () => {
  operations.pro();
})

let nnn = document.querySelector('#options div div')

pic.addEventListener('click', () => {
  style = bottom_bar.style.display;
  if (style == 'none')
    bottom_bar.style.display = 'block'
  else
    bottom_bar.style.display = 'none'
})


let data = JSON.parse(localStorage.getItem('data'));

if (data) {
  data = JSON.parse(JSON.stringify(data));
}
else {
  data = { name: [], uname: [], pass: [] };
}

localStorage.getItem('login')

if (!localStorage.getItem('login')) {
  localStorage.setItem('login', 0)
}

let login_ = () => {
  if (localStorage.getItem('login') == 1) {
    start_page.style.display = 'none'
    create_account.style.display = 'none'
    login.style.display = 'none'
    home.style.display = 'flex'
  }
}

enter_1.addEventListener('click', () => {
  let name = document.querySelector('#name_')
  let uname = document.querySelector('#uname_')
  let pass = document.querySelector('#pass')
  if (name.value != '' && uname.value != '' && pass.value != '') {
    data.name.push(name.value);
    data.uname.push(uname.value);
    data.pass.push(pass.value);
    localStorage.setItem('data', JSON.stringify(data))
    let logged = [];
    logged.push(name.value)
    logged.push('@' + uname.value)
    localStorage.setItem('logged', JSON.stringify(logged))
    localStorage.setItem('login', 1)
    setname();
    name.value = ''
    uname.value = ''
    pass.value = ''
    create_account.style.display = 'none'
    start_page.style.display = 'none'
    login.style.display = 'none'
    home.style.display = 'flex'
  }
  else {
    alert1.style.display = 'block'
  }
})

let p_name = document.querySelector('#profile_name');
let p_uname = document.querySelector('#profile_uname');

let setname = () => {
  if (localStorage.getItem('login') == 1) {
    let news = localStorage.getItem('logged')
    newss = JSON.parse(news);
    uname_disp.innerHTML = newss[1];
    name_disp.innerHTML = newss[0];
    p_name.innerHTML = newss[0];
    p_uname.innerHTML = newss[1];
  }
}

setname();


enter_2.addEventListener('click', () => {
  data = JSON.parse(JSON.stringify(data));
  let name = document.querySelector('#_name_')
  let uname = document.querySelector('#_uname_')
  let pass = document.querySelector('#_pass')
  for (let i = 0; i < data.name.length; i++) {
    if (uname.value == data.uname[i] && pass.value == data.pass[i]) {
      create_account.style.display = 'none'
      start_page.style.display = 'none'
      login.style.display = 'none'
      home.style.display = 'flex'
      localStorage.setItem('login', 1)
      name = data.name[i]
      uname = '@' + data.uname[i]
      let logged = [];
      logged.push(name)
      logged.push(uname)
      localStorage.setItem('logged', JSON.stringify(logged))
      setname();
      uname.value = ''
      pass.value = ''
    }
    else {
      alert2.style.display = 'block'
    }
  }
})

logout.addEventListener('click', () => {
  create_account.style.display = 'none'
  start_page.style.display = 'flex'
  login.style.display = 'none'
  home.style.display = 'none'
  localStorage.setItem('login', 0)
})

create_acc.addEventListener('click', () => {
  create_account.style.display = 'flex'
  start_page.style.display = 'none'
  login.style.display = 'none'
  home.style.display = 'none'
})

back[0].addEventListener('click', () => {
  start_page.style.display = 'flex'
  create_account.style.display = 'none'
  login.style.display = 'none'
  home.style.display = 'none'
})

back[1].addEventListener('click', () => {
  start_page.style.display = 'flex'
  create_account.style.display = 'none'
  login.style.display = 'none'
  home.style.display = 'none'
})

log_in.addEventListener('click', () => {
  create_account.style.display = 'none'
  start_page.style.display = 'none'
  login.style.display = 'flex'
  home.style.display = 'none'

})

login_();

let operations = {

  pro: () => {
    let style = profile.style.display
    if (style == 'none') {
      profile.style.display = 'flex'
      section.style.display = 'none'
      container.style.display = 'none'
      container_2.style.display = 'none'
      nnn.innerHTML = 'Home'
    }
    else {
      profile.style.display = 'none'
      section.style.display = 'flex'
      container.style.display = 'block'
      container_2.style.display = 'none'
      nnn.innerHTML = 'Profile'
    }
  },

  underLine_1: () => {
    let border = showborder.style.display;
    if (border == 'none') {
      showborder.style.display = 'block';
      showborder2.style.display = 'none';
      container_2.style.display = 'none'
      container.style.display = 'block'
    }
  },

  underLine_2: () => {
    let border2 = showborder2.style.display
    if (border2 == 'none') {
      showborder.style.display = 'none'
      showborder2.style.display = 'block'
      container_2.style.display = 'block'
      container.style.display = 'none'
    }
  },

  slider_on: () => {
    let side_bar = document.querySelector('#side_bar')
    let style = side_bar.style.display
    if (style == 'block') {
      side_bar.style.display = 'none'
    }
    else {
      side_bar.style.display = 'block'
      side_bar.style.animation = "sidebar 0.2s linear 0s 1"
      document.querySelector('body').style.overflow = 'hidden';
    }
  },

  slider_off: () => {
    let side_bar = document.querySelector('#side_bar')
    let style = side_bar.style.display
    if (style == 'block') {
      side_bar.style.animation = "sidebar_rev 0.5s linear 0s 1"
      document.querySelector('body').style.overflow = 'visible';
      setTimeout(() => {
        side_bar.style.display = 'none'
      }, 450)
    }
  },

  create_t: (item) => {
    container.innerHTML = container.innerHTML + `<div class="tweet" id="${item.id}">
    <div class="icon"><div class="circle"></div></div>
    <div class="data">
      <div class="">
        <div class="title">  ${item.title}</div>
        <div class="body">${item.body}</div>
      </div>
      <div class="image"></div>
      <div class="comments">
        <img class="comment" src="comments.jpg" alt="">
        <img class="retweets" src="retweets.jpg" alt="">
        <img class="like" src="like.jpg" alt="">
        <img class="poll" src="poll.jpg" alt="">
        <img class="share" src="share.jpg" alt="">
      </div>
    </div>`
  },

  error: () => {
    container.innerHTML = container.innerHTML + `<div class="error">Failed to load Tweet</div>`
  }

}

for_you.addEventListener('click', () => {
  operations.underLine_1();
})

following.addEventListener('click', () => {
  operations.underLine_2();
})

profile_pic.addEventListener('click', () => {
  operations.slider_on();
})

container.addEventListener('click', () => {
  operations.slider_off();
})

profile.addEventListener('click', () => {
  operations.slider_off();
})

container_2.addEventListener('click', () => {
  operations.slider_off();
})

async function createTweet() {
  try {
    let result = await apicall;
    let newres = await result.json();
    for (var item of newres) {
      operations.create_t(item);
    }
  } catch (e) {
    operations.error();
  }
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    createTweet();
  }
}

// switch_mode.addEventListener('click',()=>{
//   let color = body.style.backgroundColor;
//     body.classList.add('invert')
// })