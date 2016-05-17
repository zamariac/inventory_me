let express = require('express');
let router = express.Router();
let path = require('path');
let bookshelfApi = require('bookshelf-api')({
	path: path.join(__dirname, '..', 'models')
});

router.get('/products', function(req, res, next) {

});

const attachUser = function(req, res, next){
	req.body.userId = req.user.id;
	next();
};
router.post('/product', attachUser, bookshelfApi);
router.use('/', bookshelfApi);

module.exports = router;
