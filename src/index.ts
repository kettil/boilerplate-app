import bunyan from 'bunyan';

import { envSchema } from './lib/schema';
import worker from './lib/worker';

import { envType } from './lib/types';

// tslint:disable
try {
  // load env vars in the development environment
  require('dotenv').config();
} catch (err) {}
// tslint:enable

(async () => {
  const env = await envSchema.validate<envType>(process.env as any);
  const log = bunyan.createLogger({
    name: env.LOG_NAME,
    level: env.LOG_LEVEL,
    serializers: bunyan.stdSerializers,
  });

  await worker(log, env);
})();
