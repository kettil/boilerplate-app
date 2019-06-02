import app from './app';

import { envType } from './types';

const log: any = {
  debug: () => true,
  info: () => true,
  warn: () => true,
  error: () => true,
  fatal: () => true,
};

/**
 *
 */
describe('Check the app() function', () => {
  /**
   *
   */
  test('it should be faultless when app() is called', async () => {
    const env: envType = {
      LOG_NAME: 'info',
      LOG_LEVEL: 'info',
      AMQP_SCHEMA: 'amqps',
      AMQP_HOST: 'hostname',
      AMQP_PORT: 3456,
      AMQP_USER: 'user',
      AMQP_PASSWORD: 'pwd',
      AMQP_URL: 'amqps://user:pwd@hostname:3456',
    };

    await app(log, env);

    expect(true).toBe(true);
  });
});
