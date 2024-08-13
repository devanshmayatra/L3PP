const http = require('node:http');
const fs = require('node:fs');

let api = fs.readFileSync("./posts.json");

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  let url = req.url;
  let posts = JSON.parse(api.toString());

  if (url === '/posts') {
    res.write(JSON.stringify(JSON.parse(api)))
  } 
  else if (url.startsWith('/posts/')) {

    let urlPaths = url.split('/');
    let id = urlPaths[urlPaths.length - 1];

    let iD = parseInt(id);
    let post = [];

    for (value of posts) {
      if(value.post_id === iD){
        post.push(value)
      }
    }
    
    res.write(JSON.stringify(post))
  }

  res.end();
}).listen(3000);