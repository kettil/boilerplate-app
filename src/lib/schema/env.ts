import Joi from '@hapi/joi';

/**
 * Rules for AMQP
 */
const log = {
  LOG_NAME: Joi.string()
    .trim()
    .required(),
  LOG_LEVEL: Joi.string()
    .trim()
    .allow('trace', 'debug', 'info', 'warn', 'error', 'fatal')
    .default('info')
    .required(),
};

/**
 * Rules for AMQP
 *
 * If AMQP is not used, the line block can be deleted.
 */
const amqp = {
  AMQP_SCHEMA: Joi.string()
    .trim()
    .allow(['amqp', 'amqps'])
    .required(),
  AMQP_HOST: Joi.string()
    .trim()
    .required(),
  AMQP_PORT: Joi.number()
    .min(0)
    .max(65535)
    .required(),
  AMQP_USER: Joi.string()
    .trim()
    .required(),
  AMQP_PASSWORD: Joi.string()
    .trim()
    .required(),
  AMQP_URL: Joi.string()
    .trim()
    .uri({ scheme: ['amqp', 'amqps'] })
    .default((c: any) => {
      return `${c.AMQP_SCHEMA}://${c.AMQP_USER}:${c.AMQP_PASSWORD}@${c.AMQP_HOST}:${c.AMQP_PORT}`;
    }, 'AMQP URI'),
};

/**
 * Merge all rules into one rule
 */
export const envSchema = Joi.object()
  .keys({ ...log, ...amqp })
  .options({ convert: true, stripUnknown: true, abortEarly: false });
