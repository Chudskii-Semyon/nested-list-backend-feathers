
// Configure the Feathers services. (Can be re-generated.)
let items = require('./items/items.service');
let list = require('./list/list.service');

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(items);
  app.configure(list);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
