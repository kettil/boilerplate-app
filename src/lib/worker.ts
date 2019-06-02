import bunyan from 'bunyan';

import { envType } from './types';

/**
 *
 * @param log
 * @param env
 */
export const worker = async (log: bunyan, env: envType) => {
  // worker code

  log.info({ env }, 'ENV DATA');
};

/**
 *
 */
export default worker;
