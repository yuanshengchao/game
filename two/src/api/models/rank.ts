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
        total: 30,
        currentTime: '',
        nextUpdateTime: '',
        list: [{
          // mock测试数据
          rank: 1,
          userId: '1',
          nickName: 'test',
          avatar: 'test',
          score: 100,
          rankChange: 1,
          badges: [
            {
              id: '1',
              name: 'test',
              icon: 'test'
            }
          ]
        }, {
          // mock测试数据
          rank: 2,
          userId: '2',
          nickName: 'test',
          avatar: 'test',
          score: 100,
          rankChange: 1,
          badges: [
            {
              id: '1',
              name: 'test',
              icon: 'test'
            }
          ]
        }, {
          // mock测试数据
          rank: 3,
          userId: '3',
          nickName: 'test',
          avatar: 'test',
          score: 100,
          rankChange: 1,
          badges: [
            {
              id: '1',
              name: 'test',
              icon: 'test'
            }
          ]
        }, {
          // mock测试数据
          rank: 4,
          userId: '4',
          nickName: 'test',
          avatar: 'test',
          score: 100,
          rankChange: 1,
          badges: [
            {
              id: '1',
              name: 'test',
              icon: 'test'
            }
          ]
        }, {
          // mock测试数据
          rank: 5,
          userId: '5',
          nickName: 'test',
          avatar: 'test',
          score: 100,
          rankChange: 1,
          badges: [
            {
              id: '1',
              name: 'test',
              icon: 'test'
            }
          ]
        }, {
          // mock测试数据
          rank: 6,
          userId: '6',
          nickName: 'test',
          avatar: 'test',
          score: 100,
          rankChange: 1,
          badges: [
            {
              id: '1',
              name: 'test',
              icon: 'test'
            }
          ]
        }]
      } as unknown as IResponse
    });
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
