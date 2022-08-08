const Fastify = require('fastify');
const os = require('os');

const { port } = require('./src/config');

const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  return { message: 'API running', instance: os };
});

async function start() {
  try {
    await fastify.listen({ port });
  } catch (error) {
    fastify.log.error(
      `[http-server]: Error with message ${error.message} has happened`
    );
    process.exit(1);
  }
}

start()
