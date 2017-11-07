const server = require('server');

const { get, post } = server.router;
const { render, json } = server.reply;

// default port 3000
// server({ port: 3000 }, ctx => 'Hello 世界');
//server(ctx => 'It works');
server([
  get('/', ctx => render('index.hbs')),
  post('/', ctx => json(ctx.data)),
  get(ctx => status(404))
]);