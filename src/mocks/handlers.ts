import { rest } from 'msw';
import { stringify } from 'querystring';
import { useParams } from 'react-router-dom';

interface MakeStudy {
  studyId: number;
  image: File;
  startDate: Date;
  finishDate: Date;
  studyCycle: string;
  studyName: string;
  studyPassword: string;
  userLimit: string;
}

interface Poc {
  studyId: number;
  studyName: string;
}
//스터디룸
const studyRoom: Poc[] = [];

export const handlers = [
  //스터디 id로 조회 API
  rest.get('/api/v1/studies/:studyId', (req, res, ctx) => {
    const { studyId } = req.params;
    // studyRoom에 검색한 stduyId가 있다면
    const find = studyRoom.find((room) => room.studyId == Number(studyId));
    console.log(find);
    if (find) {
      console.log(studyId + '를찾았습니다');
      return res(ctx.status(200), ctx.json(studyRoom));
    } else {
      console.log(studyId + '를 찾지못하였습니다');
      return res(ctx.status(400), ctx.json(studyRoom));
    }
  }),

  //개설된 스터디 모두 호출하는 api
  rest.get('/api/v1/studies/page/0?size=2', async (req, res, ctx) => {
    console.log('호출됨');
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
      studyId: Date.now(),
      image,
      startDate,
      finishDate,
      studyCycle,
      studyName,
      studyPassword,
      userLimit,
    };

    const pocData: Poc = {
      studyId: Date.now(),
      studyName: studyName,
    };
    //studyName이 중복되지않는다면 게시물을 추가한다.
    const find = studyRoom.find((room) => room.studyName == studyName);
    if (!find) {
      studyRoom.push(pocData);
      return res(ctx.status(201), ctx.json(studyRoom));
    } //그렇지않으면 중복에러를 보낸다.
    else {
      console.log(studyRoom);
      return res(ctx.status(400), ctx.json('스터디이름이 중복되었습니다!'));
    }
  }),
];
