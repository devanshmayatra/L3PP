const http = require('node:http');
const fs = require('node:fs');


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
  }
  else if (req.url === '/post' || req.url === '/post.html') {
    let postPage = fs.readFileSync("./post.html")
    res.write(postPage);
  }
  else if (req.url === '/Login' || req.url === '/log_in.html') {
    let loginPage = fs.readFileSync("./log_in.html")
    res.write(loginPage);
  }
  else if (req.url === '/home' || req.url === '/home.html') {
    let homePage = fs.readFileSync("./home.html")
    res.write(homePage);
  }
  else if (req.url === '/signup' || req.url === '/sign_up.html') {
    let signupPage = fs.readFileSync("./sign_up.html")
    res.write(signupPage);
  }
  else if (req.url === '/profile' || req.url === '/profile.html') {
    let profilePage = fs.readFileSync("./profile.html")
    res.write(profilePage);
  }
  else if (req.url === '/start' || req.url === '/start.html') {
    let startPage = fs.readFileSync("./start.html")
    res.write(startPage);
  }


  res.end();
})
  .listen(3000);