<p align="center" dir="auto">
<img width="200" style="max-width: 100%;" src="public/images/logo/logo.svg" alt="Logo">
</p>

# Free Page Builder, Listing Directory, Blog, and Job Board Theme

Demo [play around](https://www.demo.myissue.dk)

Laravel & Vue backend [repository](https://github.com/qaiswardag/laravel_vue_directory_and_job_board_theme)

## Introduction

### About

Introducing the **Free Page Builder, Listing Directory, Blog, and Job Board Theme**! Are you searching for a powerful yet user-friendly theme to manage listings, jobs, or blog posts? Look no further! Our theme is designed to provide a seamless experience for both administrators and users, thanks to its robust features and intuitive Page Builder.

### Key Features

This theme includes:
- **Page Builder**: Drag & Drop Page Builder.
- **Listing Directory**: Organize and manage listings effortlessly.
- **Job Board**: Post and manage job listings with ease.
- **Blog**: Share updates and engage with your audience.
- **Stripe Integration**: Handle subscriptions and one-time payments securely.
- **Customizable Design**: Tailor the look and feel of your site to match your brand.
  
The built-in Page Builder is packed with features:
- **Drag & Drop**: Easily rearrange elements on your page.
- **Reordering**: Change the order of your content without hassle.
- **True Visual Editing**: See your changes in real-time as you make them.
- **Media Library**: Access and manage your media files effortlessly.
- **Responsive Editing**: Ensure your site looks great on all devices.
- **Text Editing**: Customize your text with ease.
- **Font Customization**: Choose the perfect fonts to match your style.
- **Undo & Redo**: Experiment confidently with the ability to revert changes.
- **YouTube Videos**: Integrate video content smoothly.


Empower users to create the perfect listings, jobs, or blog posts with the Page Builder.

## Technical Details

- **Frameworks**: Laravel, Vue 3, and Nuxt.
- **Features**: Drag & Drop Page Builder, Listing Directory, Blog, Job Board, and Stripe integration for subscriptions and one-time payments.

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

## Process Manager

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
