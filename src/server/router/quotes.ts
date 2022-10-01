import { createRouter } from './context';
import { z } from 'zod';

export const quotesRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.quote.findMany();
    },
  })
  .query('getById', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.quote.findUnique({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation('create', {
    input: z.object({
      text: z.string(),
      author: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.quote.create({
        data: {
          text: input.text,
          author: input.author,
        },
      });
    },
  })
  .mutation('deleteById', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.quote.delete({
        where: {
          id: input.id,
        },
      });
    },
  });
