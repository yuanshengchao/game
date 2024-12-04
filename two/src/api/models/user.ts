// 登录
export namespace PostLogin {
  export interface IParams {
    username: string;
    password: string;
  }

  export interface IResponse {
    success: boolean;
    data?: {
      userId: string;
      nickName: string;
      avatar: string;
      token: string;
      refreshToken: string;
    };
  }

  export function request(params: IParams): Promise<IResponse> {
    return Promise.resolve({} as IResponse);
  }
}
