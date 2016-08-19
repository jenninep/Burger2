'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

// User.bulkCreate([
//   { username: 'barfooz', isAdmin: true },
//   { username: 'foo', isAdmin: true },
//   { username: 'bar', isAdmin: false }
// ]).then(function() { // Notice: There are no arguments here, as of right now you'll have to...
//   return User.findAll();
// }).then(function(users) {
//   console.log(users) // ... in order to get the array of user objects
// })

return queryInterface.bulkCreate('seq_burgers', [

      {name: 'Cheeseburger', devoured: false },
      {name: 'Double Cheeseburger', devoured: false },
      {name: 'Triple Cheeseburger', devoured: false },
      {name: 'Quadruple Cheeseburger', devoured: false },
      {name: 'Quintuple Cheesburger', devoured: false},
      [, {);
      
        

        console.log(seq_burgers);
     
    
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */  return queryInterface.bulkDelete('seq_burgers', null, {});
  }
};
