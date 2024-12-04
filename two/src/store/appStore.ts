import { create, StoreApi, UseBoundStore } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { withStorageDOMEvents } from '../utils';

export interface IAuthorize {
  /** 登录的 token */
  token: string;
  refreshToken: string;
  /** 用户 ID */
  userID: string;
  /** 用户头像 */
  avatar: string;
  /** 用户名 */
  nickName: string;
}

interface IUserAuthentication {
  /** 授权的会话数据记录 */
  authorizeRecord: IAuthorize | null;
  /** 设置会话记录，如果会话记录已存在就更新 */
  setAuthorizeRecord(authorize: IAuthorize): void;
  /** 删除会话记录 */
  removeAuthorizeRecord(): void;
  /** 获取当前状态的会话信息 */
  getAuthorize(): IAuthorize | null;
}

/** 用户认证信息 */
export const useUserAuthentication = create<IUserAuthentication>()(
  immer(
    persist(
      (set, get) => ({
        authorizeRecord: null,
        setAuthorizeRecord(authorize) {
          return null;
        },
        removeAuthorizeRecord() {
          return null;
        },
        getAuthorize() {
          return null;
        }
      }),
      { name: 'game_sys/auth' }
    )
  )
);

withStorageDOMEvents(useUserAuthentication);
