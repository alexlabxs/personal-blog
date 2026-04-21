import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

const handler = makeRouteHandler({
  config: config,
});

export { handler as GET, handler as POST };
