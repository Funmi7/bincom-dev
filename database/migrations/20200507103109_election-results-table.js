exports.up = function (knex) {
  return knex.schema
    .createTable("agentname", (table) => {
      table.increments("name_id");
      table.string("firstname", 255).notNullable();
      table.string("lastname", 255).notNullable();
      table.string("email", 255);
      table.specificType("phone", "char(13)").notNullable();
      table.integer("pollingunit_uniqueid").notNullable();
    })
    .createTable("announced_lga_results", (table) => {
      table.increments("result_id");
      table.string("lga_name", 50).notNullable();
      table.specificType("party_abbreviation", "char(4)").notNullable();
      table.integer("part_score", 11).notNullable();
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
      table.string("user_ip_address", 50).notNullable();
    })
    .createTable("announced_pu_results", (table) => {
      table.increments("result_id");
      table.string("pollingunit_uniqueid", 50).notNullable();
      table.specificType("party_abbreviation", "char(4)").notNullable();
      table.integer("party_score", 11).notNullable();
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
    })
    .createTable("announced_state_results", (table) => {
      table.increments("result_id");
      table.string("state_name", 50).notNullable();
      table.specificType("party_abbreviation", "char(4)").notNullable();
      table.integer("party_score", 11).notNullable();
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
      table.string("user_ip_address", 50).notNullable();
    })
    .createTable("announced_ward_results", (table) => {
      table.increments("result_id");
      table.string("ward_name", 50).notNullable();
      table.specificType("party_abbreviation", "char(4)").notNullable();
      table.integer("party_score", 11).notNullable();
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
      table.string("user_ip_address", 50).notNullable();
    })
    .createTable("lga", (table) => {
      table.increments("unique_id");
      table.integer("lga_id", 11).notNullable();
      table.string("lga_name", 50).notNullable();
      table.integer("state_id", 50).notNullable();
      table.text("description");
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
      table.string("user_ip_address", 50).notNullable();
    })
    .createTable("party", (table) => {
      table.increments("id");
      table.string("partyid", 11).notNullable();
      table.string("partyname", 11).notNullable();
    })
    .createTable("polling_unit", (table) => {
      table.increments("uniqueid");
      table.integer("polling_unit_id", 11).notNullable();
      table.integer("ward_id").notNullable();
      table.integer("lga_id").notNullable();
      table.integer("uniquewardid", 11);
      table.string("polling_unit_number", 50);
      table.string("polling_unit_name", 50);
      table.text("polling_unit_description");
      table.string("lat", 255);
      table.string("long", 255);
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
      table.string("user_ip_address", 50).notNullable();
    })
    .createTable("states", (table) => {
      table.increments("states");
      table.string("state_name", 50).notNullable();
    })
    .createTable("ward", (table) => {
      table.increments("uniqueid");
      table.integer("ward_id").notNullable();
      table.string("ward_name", 50).notNullable();
      table.integer("lga_id", 11).notNullable();
      table.text("ward_description");
      table.string("entered_by_user", 50).notNullable();
      table.datetime("date_entered").notNullable();
      table.string("user_ip_address", 50).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ward")
    .dropTableIfExists("states")
    .dropTableIfExists("polling_unit")
    .dropTableIfExists("party")
    .dropTableIfExists("lga")
    .dropTableIfExists("announced_ward_results")
    .dropTableIfExists("announced_state_results")
    .dropTableIfExists("announced_pu_results")
    .dropTableIfExists("announced_lga_results")
    .dropTableIfExists("agentname");
};
