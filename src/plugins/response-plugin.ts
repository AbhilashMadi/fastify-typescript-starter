import type { FastifyPluginAsync, FastifyReply } from 'fastify'
import { HttpStatusCodes, HttpExceptionNames } from '@utils'
import fp from 'fastify-plugin'

const responseDecorator: FastifyPluginAsync = fp(async (fastify) => {
  // Decorate reply with 'success' method
  fastify.decorateReply(
    'success',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (this: FastifyReply, message: string, data: any, statusCode = HttpStatusCodes.OK) {
      return this.status(statusCode).send({
        success: true,
        message,
        data,
        timestamp: new Date().toISOString(),
      })
    },
  )

  // Decorate reply with 'fail' method
  fastify.decorateReply(
    'fail',
    function (
      this: FastifyReply,
      message: string,
      statusCode = HttpStatusCodes.BAD_REQUEST,
    ) {
      return this.status(statusCode).send({
        success: false,
        error: {
          name: HttpExceptionNames.BAD_REQUEST,
          message,
          timestamp: new Date().toISOString(),
        },
      })
    },
  )
})

export default responseDecorator
