import fp from 'fastify-plugin'
import cookie from '@fastify/cookie'
import type { FastifyPluginAsync } from 'fastify'
import { cookieConfig } from '@configs'

const cookiePlugin: FastifyPluginAsync = fp(async (fastify) => {
  await fastify.register(cookie, cookieConfig)
})

export default cookiePlugin
