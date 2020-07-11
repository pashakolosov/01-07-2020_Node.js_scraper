const {Router} = require('express');
const route = Router();

route.get('/', (req, res) => res.render('apple', {
    title: 'Описание аблок',
    isApple: true
}));

module.exports = route;