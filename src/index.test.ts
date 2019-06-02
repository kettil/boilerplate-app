jest.mock('bunyan');

jest.mock('./lib/app');

import bunyan from 'bunyan';

import app from './lib/app';

import { envType } from './lib/types';

/**
 *
 */
describe('Check the index file', () => {
  /**
   *
   */
  test('it should be call the app() when index file is loaded', (done) => {
    expect.assertions(2);

    const log = {
      _logInstance: true,
    };
    const env: Partial<envType> = {
      LOG_NAME: 'info',
      LOG_LEVEL: 'info',
      AMQP_SCHEMA: 'amqps',
      AMQP_HOST: 'hostname',
      AMQP_PORT: 3456,
      AMQP_USER: 'user',
      AMQP_PASSWORD: 'pwd',
    };

    process.env = {
      ...process.env,
      ...env,
    } as any;

    (bunyan.createLogger as jest.Mock).mockReturnValueOnce(log);

    require('./index');

    setTimeout(() => {
      expect((app as jest.Mock).mock.calls.length).toBe(1);
      expect((app as jest.Mock).mock.calls[0]).toEqual([log, { ...env, AMQP_URL: 'amqps://user:pwd@hostname:3456' }]);

      done();
    }, 250);
  });
});
