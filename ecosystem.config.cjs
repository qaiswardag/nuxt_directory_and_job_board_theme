module.exports = {
  apps: [
    {
      name: 'myself',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
};
