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

interface User {
  userData: any;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    baseUrl: useRuntimeConfig().public.LARAVEL_APP_URL,
    user: {},
    searchQuery: '',
  }),
  getters: {
    getUser: (state) => state.user,
    getSearchQuery: (state) => state.searchQuery,
  },
  actions: {
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    //
    //
    getAppUrl(path: string) {
      return this.baseUrl + '/' + path;
    },

    async fetchUser(xsrfToken: string) {
      const path = 'loggedin-user';

      const fullPath = this.getAppUrl(path);

      handleGetUser(fullPath);

      this.user = {
        fetchedDataUser,
        isErrorUser,
        errorUser,
        errorsUser,
        isLoadingUser,
        isSuccessUser,
      };
    },
  },
});
