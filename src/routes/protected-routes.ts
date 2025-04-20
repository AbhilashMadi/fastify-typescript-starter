import type { FastifyInstance } from 'fastify'
import { authMiddleware } from '@middlewares'

export default function protectedRoutes(app: FastifyInstance) {
  app.get('/', { preHandler: authMiddleware }, async (_, reply) => {
    reply.send({ message: 'Protected route hit (stub)' })
  })
}
