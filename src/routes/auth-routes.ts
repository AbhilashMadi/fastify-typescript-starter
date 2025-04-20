import type { FastifyInstance } from 'fastify'
import { AuthRouteSchemas } from '@/dtos/auth-schema.js'

import {
  loginController,
  registerController,
  logoutController,
  meController,
} from '@controllers'
import { authMiddleware } from '@middlewares'

// prefix: '/auth'
export default function authRoutes(app: FastifyInstance) {
  const { loginSchema, registerSchema } = AuthRouteSchemas

  app.post('/register', { schema: registerSchema }, registerController)
  app.post('/login', { schema: loginSchema }, loginController)
  app.post('/logout', logoutController)
  app.get('/me', { onRequest: authMiddleware }, meController)
}
