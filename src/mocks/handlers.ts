import { rest } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
];
