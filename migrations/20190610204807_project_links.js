exports.up = (knex) => {
  return knex.schema
    .createTable('project_link', (table) => {
      table.increments('id');
      table.string('project_id', 255);
      table.string('label', 255);
      table.string('url', 255);
    });
};

exports.down = knex => knex.schema
  .dropTable('project_link');
