import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

const { GET, POST } = makeRouteHandler({
  config: config,
});

export { GET, POST };
