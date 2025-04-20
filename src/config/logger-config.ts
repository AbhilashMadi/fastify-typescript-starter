import type { EnvConfig } from './env-config.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loggerConfig: Record<EnvConfig['NODE_ENV'], any> = {
  development: {
    // level: 'debug',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        colorize: true,
        singleLine: false,
      },
    },
  },
  production: {
    level: 'info',
    transport: {
      target: 'pino',
    },
  },
  test: false,
}

export default loggerConfig
