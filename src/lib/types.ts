import bunyan from 'bunyan';

/**
 *
 */
export type envType = {
  LOG_NAME: string;
  LOG_LEVEL: bunyan.LogLevel;

  // If AMQP is not used, the line block can be deleted.
  AMQP_SCHEMA: string;
  AMQP_HOST: number;
  AMQP_PORT: string;
  AMQP_USER: string;
  AMQP_PASSWORD: string;
  AMQP_URL: string;
};
