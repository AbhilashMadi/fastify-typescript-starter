import 'fastify'
import { JWTPayload } from './jwt.d.ts'
import type { Mongoose } from 'mongoose'
import type { Server as SocketIOServer } from 'socket.io'

declare module 'fastify' {
  interface FastifyInstance {
    mongoose: Mongoose
    io: SocketIOServer
  }

  interface FastifyRequest {
    user: JWTPayload
  }

  interface FastifyReply {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    success: (message: string, data: any, statusCode?: number) => FastifyReply
    fail: (message: string, statusCode?: number) => FastifyReply
  }
}
