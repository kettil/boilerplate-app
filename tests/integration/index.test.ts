import app from '../../src/lib/app';

import { envType } from '../../src/lib/types';

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
describe('Integration Testing', () => {
  /**
   *
   */
  test('it should be ...', async () => {
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
