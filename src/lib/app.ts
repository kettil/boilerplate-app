import bunyan from 'bunyan';

import { envType } from './types';

/**
 *
 * @param log
 * @param env
 */
export const app = async (log: bunyan, env: envType) => {
  // app code

  log.info({ env }, 'ENV DATA');
};

/**
 *
 */
export default app;
