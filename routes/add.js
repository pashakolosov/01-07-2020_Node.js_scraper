const {Router} = require('express');
const route = Router();

route.get('/', (req, res) => res.render('add', {
    title: 'Добавить в корзину',
    isAdd: true
}));

module.exports = route;