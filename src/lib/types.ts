import bunyan from 'bunyan';

/**
 *
 */
export type envType = {
  LOG_NAME: string;
  LOG_LEVEL: bunyan.LogLevel;

  AMQP_SCHEMA: string;
  AMQP_HOST: number;
  AMQP_PORT: string;
  AMQP_USER: string;
  AMQP_PASSWORD: string;
};
