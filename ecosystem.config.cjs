module.exports = {
  apps: [
    {
      name: 'myissue',
      port: '4000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
