import fp from 'fastify-plugin'
import helmet from '@fastify/helmet'
import type { FastifyPluginAsync } from 'fastify'

const helmetPlugin: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(helmet)
})

export default helmetPlugin
