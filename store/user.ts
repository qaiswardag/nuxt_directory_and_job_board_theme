// stores/counter.ts

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      firstName: 'test1233',
      lastName: '1234rrrr',
    },
  }),
});
