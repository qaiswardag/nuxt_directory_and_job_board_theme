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

    fetchUser() {
      const path = 'api/loggedin-user';

      console.log(`baseUrl:`, this.baseUrl);

      this.getAppUrl(path);

      //
      //
      //
      //
      //
      //
      // handleGetUser();
      this.user = {
        firstName: 'updated',
        lastName: 'new123',
      };
    },
  },
});
