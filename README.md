# NestJs example app

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:debug
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Do it yourself:
Following NestJs [starting guide](https://docs.nestjs.com/first-steps)
#### 1- Setup NestJs framework.
```bash
$ npm i -g @nestjs/cli
$ nest new nestjs-example
```

#### 2- Add .env configuration and default node debugger.
```bash
$ yarn add @hapi/joi
$ yarn add dotenv
$ yarn add @nestjs/config
$ echo PORT=3000 > .env
```

#### 3- Add swagger.
```
$ yarn add @nestjs/swagger swagger-ui-express
```

#### 4- Create the `Users` module
```bash
$ nest generate module users
$ nest generate controller users
$ nest generate service users
$ nest generate class users/dto/users.dto --no-spec
```

#### 5- Add http logger middleware
```bash
$ nest generate middleware common/http-logger --no-spec
```

#### 6- Add global exception filter
```bash
$ nest generate filter common/global-exception --no-spec
```

#### 6- Add request validation pipe
```bash
$ nest generate pipe common/request-validation --no-spec
```