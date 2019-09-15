## (API Expressjs) Boilerplate

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/lleocastro/encryptor/issues)

Starter for a flexible and scalable REST API with Nodejs and Expressjs.

### Quickstart

1. **Clone this repository**

    `git clone https://github.com/lleocastro/rest-api-boilerplate.git`
    
   ##### or use as template 
   [https://github.com/lleocastro/rest-api-boilerplate/generate](https://github.com/lleocastro/rest-api-boilerplate/generate)

2. **Install dependencies**

    `npm install`
    
3. **Configure envs**

    `npm run envs:generate`
    
    > open `.env` and edit this

4. **Run server**

   `npm start` or `npm run dev`

   ###### Server should be running at http://localhost:4000/api
   
5. **Run tests**
    
    open `.env.test` and edit this
    
    > then execute `npm test`
   
### Project Structure
```

├── /
|   ├── config/
|   |   └── ...
|   ├── database/
|   ├── ├── migrations/
|   |   ├── └── ...
|   ├── ├── seeders/
|   |   ├── └── ...
|   |   └── ...
|   ├── src/
|   |   ├── models/
|   |   |   ├── index.js
|   |   |   └── ...
|   |   ├── services/
|   |   |   ├── user/
|   |   |   |   ├── controller.js
|   |   |   |   └── index.js
|   |   |   |   └── ...
|   |   |   └── index.js
|   |   ├── utils/
|   |   |   └── ...
|   |   ├── app.js
|   |   ├── constants.js
|   |   ├── index.js
|   |   └── ...
|   ├── scripts/
|   |   └── ...
|   └── tests/
|   |   └── ...
├── .eslintrc
├── .babelrc
├── .editorconfig
├── package.json
├── package-lock.json
├── nodemon.json
├── Dockerfile
├── .dockerignore
├── .env.example
├── .env.test.example
└── .gitignore
```

### Scripts
- **npm start**

     Start server

- **npm run dev**

     Start nodemon dev server

- **npm run lint**

     Runs the linter

- **npm test**

     Runs tests
     
- **npm run orm**

     ORM super powers
   
- **npm run envs:generate**

     Generate `.env` and `.env.test`
     
     
### SECURITY

If you discover security related issues, please email leonardo_carvalho@outlook.com instead of using the issue tracker.


#### To contributions 

Please, see [doc for contribute](https://github.com/lleocastro/rest-api-boilerplate/blob/master/CONTRIBUTE.md). Thanks!


#### License

This is licensed under the MIT license. See [License File](https://github.com/lleocastro/rest-api-boilerplate/blob/master/LICENSE) for more information.
