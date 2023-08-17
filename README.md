# TS Template - TypeScript Project Template❤️️🍉🌸
TS Template is a TypeScript project template that provides a solid foundation for building TypeScript applications. It comes with a set of useful scripts, configurations, and development tools to streamline your development process. 

## Features
- Pre-configured TypeScript setup
- Ready-to-use linting and code formatting
- Unit testing using Jest
- Husky integration

## Prerequisites
Before you begin, ensure you have the following installed on your machine:

`Node.js (version >= 14)`

`npm (usually comes with Node.js installation)`

## Getting Started

Clone the repository:

```bash
npx degit github:dariasmyr/ts-template
```

Install Dependencies:

```bash
npm install
```

### Development Mode:

To run the project in development mode with automatic restarts (using Nodemon), use:

```bash
npm run start:dev
```

### Production Mode:

To run the project in production mode, use:

```bash
npm run start:prod
```

This command will build the project using the TypeScript compiler and then start the application.

### Testing:

Run unit tests using:

```bash
npm test
```

To run tests in watch mode:

```bash
npm test:watch
```

To generate a test coverage report:

```bash
npm test:cov
```

### Linting:

To check your code for linting errors:

```bash
npm run lint
```

To automatically fix linting errors:

```bash
npm run lint:fix
```

Additional Scripts

`npm run ts:check`: Run TypeScript type checking without emitting files.
`npm run check`: Run TypeScript type checking and linting.
`npm run test:e2e`: Run end-to-end tests using Jest with a custom configuration.
`npm run test:debug`: Run tests in debug mode.

### Updating Dependencies
To update project dependencies, you can use the following command to check for updates and update your package.json:

```bash
npm run update
```

## License
This project is licensed under the MIT License.

## Author
Created by dasha.smyr@gmail.com.

## Contributing
Contributions are welcome. Feel free to submit a pull request. ❤️❤️❤️
