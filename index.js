const express = require('express');
const path = require('path');
const fs = require('fs');
const exphbs = require('express-handlebars');

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

app.get('/', (req, res) => res.render('index'));

app.get('/about', (req, res) => res.render('about'));

app.listen(PORT, () => console.log(`server has been started on ${PORT} port...`))
