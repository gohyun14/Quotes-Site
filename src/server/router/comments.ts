import { createRouter } from './context';
import { z } from 'zod';

export const commentsRouter = createRouter()
  .query('getAllByQuoteId', {
    input: z.object({
      quoteId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.comment.findMany({
        where: {
          quoteId: input.quoteId,
        },
      });
    },
  })
  .mutation('create', {
    input: z.object({
      text: z.string(),
      quoteId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.comment.create({
        data: {
          text: input.text,
          quoteId: input.quoteId,
        },
      });
    },
  })
  .mutation('deleteAllByQuoteId', {
    input: z.object({
      quoteId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.comment.deleteMany({
        where: {
          quoteId: input.quoteId,
        },
      });
    },
  });
