import fp from 'fastify-plugin'
import cors from '@fastify/cors'
import type { FastifyPluginAsync } from 'fastify'
import { corsConfig } from '@configs'

const corsPlugin: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(cors, corsConfig.fastify)
})

export default corsPlugin
