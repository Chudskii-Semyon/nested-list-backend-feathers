/* eslint quotes: 0 */
// Defines Mongoose model for service `items`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  {
    title: {
      type: String,
      required: true
    },
    parent: {
      type: String,
      required: true,
      ref: 'list'
    },
    ancestors: {
      type: Array,
      required: true
    },
    sublist: {
      type: Boolean,
      default: false
    },
    position: {
      type: Number,
      required: true
    }
  },
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
