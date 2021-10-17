# [  ]

## _Babel_

### - installation

```npm
npm install --save babel-cli babel-preset-react babel-preset-es2015
```

 - add preset in `package.json`
 
```js
{
    ...
    "babel":{
        "presets":["react","es2015"]
    }
    ...
}
```

 - check babel version

```cmd
./node_modeuls/.bin/babel --version

or npm run using package.json

babel --version
```
 
 - transform `.jsx` to `.js`

```cmd
babel jsx/script.jsx -o js/script.js
```

 - auto transfrom

`watch option`

```cmd
babel jsx/script.jsx -o js/script.js -w
```

 - 여러 `.jsx`파일들 --> 여러 `.js`파일들

 ```cmd
babel source -d build
 ```

  - 원본 폴더의 모든 파일을 하나의 `.js`파일로

```cmd
babel src -o script-compiled.js
```

<br>
<br>
<br>
<hr>
<br>
<br>
<br>

## _Webpack_

### - Website https://webpack.js.org/

### - Getting Started

 - check `study/webpack-demo`

#### 프로젝트 구조 : Start

```
webpack-demo
|- package.json
|- index.html
|- /src
  |- index.js
```
 - `src/index.js`

```js
function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

 - `index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.17.20"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```
#### 프로젝트 구조 : 분리

make "source" code and "distribution" code

 - `src/index.js`

```js
import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
```

 - `dist/index.html`

```html
 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8" />
     <title>Getting Started</title>
    <!-- <script src="https://unpkg.com/lodash@4.17.20"></script> -->
   </head>
   <body>
    <!-- <script src="./src/index.js"></script> -->
    <script src="main.js"></script>
   </body>
 </html>
```
 - make `main.js`

```cmd
npx webpack
```

#### Using a Configuration

As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file. This is much more efficient than having to manually type in a lot of commands in the terminal.

 - `webpack.config.js`

 ```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode : 'development'
};
 ```

  - make `main.js` using configuration file

```cmd
npx webpack --config webpack.config.js
```

 - modify `package.json`

add `"build": "webpack"`

```js
 {
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
```

 - npm command

```cmd
npm run build
```