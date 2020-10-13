const knex = require("knex")({
  client: "pg",
  connection: {
    host: "faraday.cse.taylor.edu",
    user: "livia_rose",
    password: "fihekawu",
    database: "livia_rose",
  },
});

const objection = require("objection");
const Model = objection.Model;
Model.knex(knex);

module.exports = { knex, Model };