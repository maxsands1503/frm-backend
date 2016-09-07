
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('connections').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('connections').insert({id: 1, first_name: 'Max', last_name: 'Sands', relation: 'friend', user_id: 3 ,is_user: true , connection_id: 1}),
        knex('connections').insert({id: 2, first_name: 'Kendra', last_name: 'Lyndon', relation: 'friend', user_id: 2, is_user: true , connection_id: 3}),
        knex('connections').insert({id: 3, first_name: 'Ryan', last_name: 'Garofalo', relation: 'friend', user_id: 3,is_user: true , connection_id: 2})
      ]);
    });
};
