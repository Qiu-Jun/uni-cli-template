import { defineStore } from 'pinia';

interface AuthState {
  /** 用户信息 */
  test: string;
}

export const useAppStore = defineStore('app-store', {
  state: (): AuthState => ({
    test: '22'
  }),
  getters: {
    
  },
  actions: {
   
  }
});