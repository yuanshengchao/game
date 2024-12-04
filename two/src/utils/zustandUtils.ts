import { Mutate, StoreApi } from 'zustand';

type StoreWithPersist<T> = Mutate<StoreApi<T>, [['zustand/persist', any]]>;

/**
 * 强化侦听持久化 zustand 状态，当其他 tap 页更新 Storage 时及时同步到 zustand。
 *
 * https://docs.pmnd.rs/zustand/integrations/persisting-store-data#how-can-i-rehydrate-on-storage-event
 *
 * @param store 需要强化的 zustand 对象
 * @returns 返回一个取消注册的回调
 */
export const withStorageDOMEvents = <T>(store: StoreWithPersist<T>) => {
  const storageEventCallback = (e: StorageEvent) => {
    if (e.key === store.persist.getOptions().name && e.newValue) {
      store.persist.rehydrate();
    }
  };

  window.addEventListener('storage', storageEventCallback);

  return () => {
    window.removeEventListener('storage', storageEventCallback);
  };
};
