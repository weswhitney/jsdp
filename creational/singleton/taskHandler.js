var repo = require('./repo');

var myrepo = repo();

var taskHandler = function() {
  return {
    save: function() {
      myrepo.save('Hi from the taskHandler');
    }
  }
}

module.exports = taskHandler();