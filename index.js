const express = require('express');
const fs = require('fs');
const path = require('path');
const exphbs = require('express-handlebars');
const routeHome = require('./routes/home');
const routeAdd = require('./routes/add');
const routeApple = require('./routes/apple');

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

app.use((req, res, next) => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let data = `${hours}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get('user-agent')}`;

    fs.appendFile('server.log', data + '\n', () => console.log(data));
    next();
});

app.use('/', routeHome);
app.use('/add', routeAdd);
app.use('/apple', routeApple);




app.listen(PORT, () => console.log(`server has been started on ${PORT} port...`))
