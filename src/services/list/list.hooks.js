// Hooks for service `list`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
// !code: imports // !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const {iff} = commonHooks;
// eslint-disable-next-line no-unused-vars
const {create, update, patch, validateCreate, validateUpdate, validatePatch} = require('./list.validate');
// !end

// !code: init // !end

let moduleExports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      async context => {
        const {data} = await context.service.find();

        if (!data.length) {
          context.data.parent = 'none';
          context.data.ancestors = [];

        } else {
          const {data} = await context.app.service('items').find({
            query: {
              $limit: 1,
              _id: context.data.parent
            }
          });

          context.data.ancestors = [...data[0].ancestors, context.data.parent];
        }

        return context;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
};

module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
