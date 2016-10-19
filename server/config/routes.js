var express        = require('express');
var router         = express.Router();
var bodyParser     = require('body-parser');
//Can use regular functions instead of .post, .get, .whatever
//Also overrides CORS (cross origin requests)
var methodOverride = require('method-override');
var propertiesCtrl = require('../controllers/propertiesCtrl.js');

router.route('/properties').post(propertiesCtrl.create);
router.route('/properties').get(propertiesCtrl.show);
router.route('/properties/:id').get(propertiesCtrl.showOne);
router.route('/properties/:id/edit').put(propertiesCtrl.edit);
router.route('/properties/:id').delete(propertiesCtrl.delete);

module.exports = router;
