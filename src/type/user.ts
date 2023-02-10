export interface userInform {
  username: string;
  password: string;
}

export interface User {
  id: number;
  username: string;
}

// 근데이거는 왜 첫글자 대문자로 안써여 ? 
export interface createUser {
  nickname: string;
  username: string;
  password: string;
}
