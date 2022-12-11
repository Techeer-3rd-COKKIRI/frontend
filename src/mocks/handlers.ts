import { rest } from 'msw';
let studyRoom = [{ id: 0, studyName: '스프링스터디' }];
export const handlers = [
  rest.post('/api/v1/studies', (req, res, ctx) => {
    studyRoom.push({ id: Date.now(), studyName: '스프링' });
    console.log(studyRoom);
    return res(ctx.status(201), ctx.json(req.body));
  }),
];
