import Joi from '@hapi/joi';

/**
 * ENV VARIABLE
 */
export const envSchema = Joi.object()
  .keys({
    LOG_NAME: Joi.string()
      .trim()
      .required(),
    LOG_LEVEL: Joi.string()
      .trim()
      .allow('trace', 'debug', 'info', 'warn', 'error', 'fatal')
      .default('info')
      .required(),
    AMQP_SCHEMA: Joi.string()
      .trim()
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
  })
  .options({ convert: true, stripUnknown: true, abortEarly: false });
