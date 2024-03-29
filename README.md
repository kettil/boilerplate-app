# Boilerplate - Application [Work in progress]

## Table of Contents

- [Features](#features)
- [Introduction](#introduction)
- [Starting](#starting)
- [Building](#building)
- [Tests](#tests)
- [Prettier and Lint](#prettier-and-lint)

## Features

- ...
- ...
- ...

## Introduction

...

## Starting

The application is built and executed.

The following commands are available:

- `npm run start`

  Start the application (default: locale)

- `npm run start:locale`

  Start the application on the host

- `npm run start:docker`

  Start the application as docker image

  All services defined in the docker-compose must be mapped in the `.env.mapping` (see also `.env`).

## Building

Compile the application from TypeScript to JavaScript.

The following command is available:

- `npm run build`

  Builds the application

## Tests

There are three types of tests:

- **Unit Tests**

  These tests have no dependencies outside the tested file (exception: class inheritance). All dependencies are mocked.

  A test coverage of 100% should be achieved.

- **Integration Tests**

  These tests have no dependencies outside the project. All dependencies in the package.json file are mocked.
  Small libraries, e.g. lodash or luxon, don't need to be mocked.

  A test coverage between 50% and 75% should be achieved.

- **Functional Tests**

  These tests are performed with all dependencies and take a long time. External services, e.g. MySQL, will/must be provided via docker.

  No dependency should be mocked.

  A test coverage between 50% and 75% should be achieved.

**The following commands are available:**

| Command                          |    Type     | Description                                     |
| -------------------------------- | :---------: | ----------------------------------------------- |
| `npm run test`                   |    unit     | Run all unit tests                              |
| `npm run test:watch`             |    unit     | Watching mode from unit test                    |
| `npm run coverage`               |    unit     | Creates a coverage report from unit test        |
| `npm run test:integration`       | integration | Run all integration tests                       |
| `npm run test:integration:watch` | integration | Watching mode from integration test             |
| `npm run coverage:integration`   | integration | Creates a coverage report from integration test |
| `npm run test:functional`        | functional  | Run all functional tests                        |
| `npm run test:functional:watch`  | functional  | Watching mode from functional test              |
| `npm run coverage:functional`    | functional  | Creates a coverage report from functional test  |

## Prettier and Lint

Ensures that the code is formatted uniformly and that the coding standards are adhered to.

The following commands are available:

- `npm run prettier`

  Changes the code formatting as defined in the Prettier setting.

- `npm run lint`

  Checks if the lint rules are followed. It calls the prettier command first.
