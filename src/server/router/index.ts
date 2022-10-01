// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { commentsRouter } from './comments';
import { quotesRouter } from './quotes';
import { protectedExampleRouter } from './protected-example-router';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('auth.', protectedExampleRouter)
  .merge('quotes.', quotesRouter)
  .merge('comments.', commentsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
