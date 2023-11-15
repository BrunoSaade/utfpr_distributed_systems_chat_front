# UTFPR Distributed Systems Chat - Frontend

## 💻  Project Overview

This project, developed by Bruno Saade as part of the Distributed Systems course at the Federal Technological University of Paraná (UTFPR), aims to create a real-time chat system using the WebSocket protocol. The frontend is built with Nuxt (Vue.js) and Tailwind CSS.

The backend of the project, developed by Igor Santana, can be found in the repository [here](https://github.com/igorOsantana/utfpr_distributed_systems_chat_api). It utilizes Node.js, Nest, Prisma ORM, and PostgreSQL.

## 🚀 Build Setup

```bash
# Install dependencies
$ yarn install

# Serve with hot reload at localhost:3000
$ yarn dev

# Build for production and launch server
$ yarn build
$ yarn start

# Generate static project
$ yarn generate
```

## Project Structure

### `assets`

The `assets` directory contains uncompiled assets such as images, fonts, or stylesheets. These files can be referenced in your components or pages.

### `components`

The `components` directory holds Vue.js components, promoting modularity and reusability. Components can be imported into pages, layouts, or other components.

### `mixins`

The `mixins` directory contains reusable Vue.js mixins. Mixins are a way to distribute reusable functionalities across multiple components.

### `pages`

The `pages` directory contains application views and routes. Each `*.vue` file inside this directory represents a distinct page, and Vue Router is automatically configured.

### `partials`

The `partials` directory may contain partial components or template files that are used across multiple pages or components.

### `plugins`

The `plugins` directory contains JavaScript plugins that run before instantiating the root Vue.js application. This is the place to add Vue plugins or inject functions/constants.

### `services`

The `services` directory is likely used for encapsulating logic related to external services or APIs.

### `static`

The `static` directory contains static files that are served directly. Each file inside this directory is mapped to the root URL.

### `store`

The `store` directory contains Vuex store files. Creating a file in this directory automatically activates Vuex, allowing for state management.

### `utils`

The `utils` directory may contain utility functions or helper modules used throughout the project.


