/**
 * Template file for AMQP
 *
 * If AMQP is not used, the file can be deleted.
 */

/* tslint:disable:no-implicit-dependencies */
import amqp from 'amqplib';

import { envSchema } from '../../../src/lib/schema';

import { envType } from '../../../src/lib/types';

// tslint:disable-next-line:no-var-requires
require('dotenv').config();

const { value: env, error } = envSchema.validate<envType>(process.env as any);

if (error) {
  throw error;
}

export const amqpUrl = env.AMQP_URL;

/**
 *
 * @param url
 * @param queues
 */
export const amqpRemoveQueues = async (url: string, queues: string[]) => {
  const connection = await amqp.connect(url, {});
  const channel = await connection.createChannel();

  for (const queue of queues) {
    await channel.deleteExchange(queue);
    await channel.deleteQueue(queue);
  }

  await connection.close();
};
