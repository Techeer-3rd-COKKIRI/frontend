import { rest } from 'msw';

interface MakeStudy {
  id: number;
  image: string;
  startDate: Date;
  finishDate: Date;
  studyCycle: string;
  studyName: string;
  studyPassword: string;
  userLimit: string;
}

//스터디룸
const studyRoom: MakeStudy[] = [];

export const handlers = [
  //스터디 id로 조회 API
  rest.get('/api/v1/studies/{studyId}', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(studyRoom));
  }),

  //스터디 개설 API
  rest.post<MakeStudy>('/api/v1/studies', async (req, res, ctx) => {
    //body에서 가져온 데이터를 구조분해할당
    const {
      image,
      startDate,
      finishDate,
      studyCycle,
      studyName,
      studyPassword,
      userLimit,
    } = req.body;

    //가져온 데이터를 data object로 묶어준다.
    const data: MakeStudy = {
      id: Date.now(),
      image,
      startDate,
      finishDate,
      studyCycle,
      studyName,
      studyPassword,
      userLimit,
    };

    //studyName이 중복되지않는다면 게시물을 추가한다.
    const find = studyRoom.find((room) => room.studyName == studyName);
    if (!find) {
      studyRoom.push(data);
      console.log(studyRoom);
      return res(ctx.status(201), ctx.json(studyRoom));
    } //그렇지않으면 중복에러를 보낸다.
    else {
      console.log(studyRoom);
      return res(ctx.status(400), ctx.json('스터디이름이 중복되었습니다!'));
    }
  }),
];
