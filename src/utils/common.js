const _ = require('lodash');

const filterKeyByObject = ({key = [], object = {}}) => {
  return _.pick(object, key);
}
module.exports = {
  filterKeyByObject
}