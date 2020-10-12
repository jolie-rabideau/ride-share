const Authorization = require('../models/Authorization')

const auth = await Authorization.query().withGrapheFetched('');

console.log(auth[0].''[0].name);
