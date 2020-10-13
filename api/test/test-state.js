const State = require("../models/State");

async function testState() {
  await State.query()
    .select()
    .then((states) => console.log(states))
    .catch((error) => console.log(error.message));
  State.knex().destroy();
}

testState();
