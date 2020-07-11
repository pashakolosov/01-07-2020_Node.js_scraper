const {Router} = require('express');
const route = Router();

route.get('/', (req, res) => res.render('index', {
    title: 'Продажа яблок',
    isIndex: true
}));

module.exports = route;