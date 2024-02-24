// stores/counter.ts

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      firstName: 'test1233',
      lastName: '1234rrrr',
    },
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    fetchUser() {
      console.log(`new user`);

      this.user = {
        firstName: 'updated',
        lastName: 'new123',
      };
    },
  },
});
