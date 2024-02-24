// stores/counter.ts

import { defineStore } from 'pinia';
import { vueFetch } from '../composables/vueFetch';

const {
  handleData: handleGetUser,
  fetchedData: fetchedDataUser,
  isError: isErrorUser,
  error: errorUser,
  errors: errorsUser,
  isLoading: isLoadingUser,
  isSuccess: isSuccessUser,
} = vueFetch();

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: useRuntimeConfig().public.LARAVEL_APP_URL,
    user: {
      firstName: 'test1233',
      lastName: '1234rrrr',
    },
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    getAppUrl(path: string) {
      return this.baseUrl + '/' + path;
    },

    async fetchUser() {
      const path = 'api/loggedin-user';

      this.getAppUrl(path);

      //
      //
      const test = await handleGetUser(this.getAppUrl(path));
      console.log(`test:`, test);
      //
      console.log(`fetchedDataUser:`, fetchedDataUser);
      //
      //
      this.user = {
        firstName: 'updated',
        lastName: 'new123',
      };
    },
  },
});
