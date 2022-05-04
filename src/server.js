const Fastify = require('fastify');

const fastify = Fastify({});

async function start() {
  try {
  } catch (error) {
    fastify.log.error(
      `[http-server]: Error with message ${error.message} has happened`
    );
  }
}

module.exports = {
  start
};
