/* tslint:disable:no-implicit-dependencies */
import amqp from 'amqplib';

import bunyan from 'bunyan';

import { envType } from './types';

/**
 *
 * @param log
 * @param env
 */
export const worker = async (log: bunyan, env: envType) => {
  const amqpUrl = `${env.AMQP_SCHEMA}://${env.AMQP_USER}:${env.AMQP_PASSWORD}@${env.AMQP_HOST}:${env.AMQP_PORT}`;

  // worker code

  log.debug(env, 'ENV values');
  log.info(amqpUrl);

  await amqpRemoveQueues(log.child({ lib: 'amqp' }), amqpUrl, ['queue1', 'queue2', 'queue3']);

  log.info(amqpUrl);
};

/**
 *
 */
export default worker;

/**
 *
 * @param url
 * @param queues
 */
const amqpRemoveQueues = async (log: bunyan, url: string, queues: string[]) => {
  log.debug('Create connection');
  const connection = await amqp.connect(url, {});
  log.debug('Create channel');
  const channel = await connection.createChannel();

  for (const queue of queues) {
    log.info(`Delete exchange "${queue}"`);
    await channel.deleteExchange(queue);
    log.info(`Delete queue "${queue}"`);
    await channel.deleteQueue(queue);
  }

  log.debug('Close connection');
  await connection.close();
};
