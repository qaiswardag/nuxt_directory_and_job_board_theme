<p align="center" dir="auto">
<img width="200" style="max-width: 100%;" src="public/images/logo/logo.svg" alt="Logo">
</p>

# Free Page Builder, Listing Directory, Blog, and Job Board Theme

Demo [play around](https://www.demo.myissue.dk)

Laravel & Vue backend [repository](https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme)



## Installation

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## PM2

PM2 (Process Manager 2) is a fast and easy solution for hosting your Nuxt application on your server or VM.
To use pm2, use an ecosystem.config.cjs:
ecosystem.config.cjs

```
module.exports = {
  apps: [
    {
      name: "NuxtAppName",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs"
    }
  ]
};
```

```terminal
npm run build
```

## Check port:

Identify the process using port 3000.

```
lsof -i :3000
```

#### Output:

COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
node 21995 myissue 19u IPv6 986387 0t0 TCP \*:3000 (LISTEN)

Kill:

```
kill -9 21995
```

-9
The -9 is the signal number that corresponds to the SIGKILL signal in Unix-like operating systems.
The SIGKILL signal is a special signal that forcefully terminates a process.
It does not allow the process to perform any cleanup or
handle the signal in any way – it immediately terminates the process.

## pm2 Restart process

Get Process ID. Remember to install pm2 globally

```
pm2 status
```

Restart Process. If process ID is 0

```
pm2 restart 0
```
