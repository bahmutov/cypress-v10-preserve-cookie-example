# cypress-v10-preserve-cookie-example

> Cypress.Cookies.preserveOnce for Cypress v10 example

Uses plugin [cypress-v10-preserve-cookie](https://github.com/bahmutov/cypress-v10-preserve-cookie)

- 📺 [How To Preserve Cookie Once In Cypress v10](https://youtu.be/b8aoVh6IdCg)

## Installation

```shell
$ npm install
```

You will need a MongoDB somewhere and a Redis instance. I assume the MongoDB is running in the cloud and the Redis is running locally in a Docker container.

## Run the app

### Using docker-compose

```shell
$ docker-compose up
```

### Run the server and the web app

```shell
$ MONGODB=... SESSION_SECRET=... npm start
```

Tip: use [as-a](https://github.com/bahmutov/as-a) to inject the above environment variables into a local / user profile file `.as-a.ini`, something like this:

```ini
[chat.io]
SESSION_SECRET=MySecretVariable1234
MONGODB=mongodb://root:rootPass1234@localhost:27017/
```

```shell
$ as-a . npm start
```

Open the [http://localhost:3000](http://localhost:3000) in your browser.

## About me

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
