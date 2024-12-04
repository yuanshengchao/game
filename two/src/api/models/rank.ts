// 获取排行榜
export namespace GetRankList {
  export interface IParams {
    type: 'daily' | 'weekly' | 'monthly';
    page: number;
    pageSize: number;
  }

  export interface IResponse {
    success: boolean;
    data?: {
      total: number;
      currentTime: string;
      nextUpdateTime: string;
      list: Array<{
        rank: number;
        userId: string;
        nickName: string;
        avatar: string;
        score: number;
        rankChange: number;
        badges: Array<{
          id: string;
          name: string;
          icon: string;
        }>;
      }>;
    };
  }

  export function request(params: IParams): Promise<IResponse> {
    return Promise.resolve({
      success: true,
      data: {
        total: 1000,
        currentTime: '',
        nextUpdateTime: '',
        list: []
      }
    } as IResponse);
  }
}

// 获取用户排名详情
export namespace GetUserRankDetail {
  export interface IParams {
    userId: string;
    type: 'daily' | 'weekly' | 'monthly';
  }

  export interface IResponse {
    currentRank: number;
    bestRank: number;
    rankHistory: Array<{
      time: string;
      rank: number;
      score: number;
    }>;
    achievements: Array<{
      id: string;
      name: string;
      icon: string;
      obtainTime: string;
    }>;
  }

  export function request(params: IParams): Promise<IResponse> {
    return Promise.resolve({} as IResponse);
  }
}

// 获取排名分布
export namespace GetRankDIstribution {
  export interface IParams {
    type: 'daily' | 'weekly' | 'monthly';
  }

  export interface IResponse {
    success: boolean;
    data?: {
      total: number;
      distribution: Array<{
        scoreRange: string;
        count: number;
        topScore: number;
        bottomScore: number;
      }>;
      percentiles: Array<{
        percentage: number;
        score: number;
      }>;
    };
  }

  export function request(params: IParams): Promise<IResponse> {
    return Promise.resolve({} as IResponse);
  }
}
