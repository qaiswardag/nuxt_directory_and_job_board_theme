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

    tagsOrContentListings: false,
    tagsOrContentPosts: false,
    tagsOrContentJobs: false,

    searchQueryListings: '',
    searchQueryJobs: '',
    searchQueryPosts: '',

    currentPageListings: 1,
    currentPageJobs: 1,
    currentPagePosts: 1,

    currentCategoriesListings: [],
    currentCategoriesJobs: [],
    currentCategoriesPosts: [],

    currentTypesListings: [],
    currentTypesJobs: [],
    currentTypesPosts: [],

    currentCountriesListings: [],
    currentCountriesJobs: [],
    currentCountriesPosts: [],

    currentStatesListings: [],
    currentStatesJobs: [],
    currentStatesPosts: [],
  }),
  getters: {
    getUser: (state) => state.user,
    getTagsOrContentListings: (state) => state.tagsOrContentListings,
    getTagsOrContentJobs: (state) => state.tagsOrContentJobs,
    getTagsOrContentPosts: (state) => state.tagsOrContentPosts,

    getSearchQueryListings: (state) => state.searchQueryListings,
    getSearchQueryJobs: (state) => state.searchQueryJobs,
    getSearchQueryPosts: (state) => state.searchQueryPosts,

    getCurrentPageListings: (state) => state.currentPageListings,
    getCurrentPageJobs: (state) => state.currentPageJobs,
    getCurrentPagePosts: (state) => state.currentPagePosts,

    getCurrentCategoriesListings: (state) => state.currentCategoriesListings,
    getCurrentCategoriesJobs: (state) => state.currentCategoriesJobs,
    getCurrentCategoriesPosts: (state) => state.currentCategoriesPosts,

    getCurrentTypesListings: (state) => state.currentTypesListings,
    getCurrentTypesJobs: (state) => state.currentTypesJobs,
    getCurrentTypesPosts: (state) => state.currentTypesPosts,

    getCurrentCountriesListings: (state) => state.currentCountriesListings,
    getCurrentCountriesJobs: (state) => state.currentCountriesJobs,
    getCurrentCountriesPosts: (state) => state.currentCountriesPosts,

    getCurrentStatesListings: (state) => state.currentStatesListings,
    getCurrentStatesJobs: (state) => state.currentStatesJobs,
    getCurrentStatesPosts: (state) => state.currentStatesPosts,
  },
  actions: {
    setTagsOrContentListings(query: boolean) {
      this.tagsOrContentListings = query;
    },
    setTagsOrContentJobs(query: boolean) {
      this.tagsOrContentJobs = query;
    },
    setTagsOrContentPosts(query: boolean) {
      this.tagsOrContentPosts = query;
    },
    setSearchQueryListings(query: string) {
      this.searchQueryListings = query;
    },
    setSearchQueryJobs(query: string) {
      this.searchQueryJobs = query;
    },
    setSearchQueryPosts(query: string) {
      this.searchQueryPosts = query;
    },

    setCurrentPageListings(query: number) {
      this.currentPageListings = query;
    },
    setCurrentPageJobs(query: number) {
      this.currentPageJobs = query;
    },
    setCurrentPagePosts(query: number) {
      this.currentPagePosts = query;
    },

    setCurrentCategoriesListings(query: any) {
      this.currentCategoriesListings = query;
    },
    setCurrentCategoriesJobs(query: any) {
      this.currentCategoriesJobs = query;
    },
    setCurrentCategoriesPosts(query: any) {
      this.currentCategoriesPosts = query;
    },

    setCurrentTypesListings(query: any) {
      this.currentTypesListings = query;
    },
    setCurrentTypesJobs(query: any) {
      this.currentTypesJobs = query;
    },
    setCurrentTypesPosts(query: any) {
      this.currentTypesPosts = query;
    },

    setCurrentCountriesListings(query: any) {
      this.currentCountriesListings = query;
    },
    setCurrentCountriesJobs(query: any) {
      this.currentCountriesJobs = query;
    },
    setCurrentCountriesPosts(query: any) {
      this.currentCountriesPosts = query;
    },

    setCurrentStatesListings(query: any) {
      this.currentStatesListings = query;
    },
    setCurrentStatesJobs(query: any) {
      this.currentStatesJobs = query;
    },
    setCurrentStatesPosts(query: any) {
      this.currentStatesPosts = query;
    },

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
