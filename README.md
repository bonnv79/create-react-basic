# create-react-basic

> create-react-basic

[![NPM](https://img.shields.io/npm/v/create-react-basic.svg)](https://www.npmjs.com/package/create-react-basic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting Started with Create React App

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- This project is used to generate react libraries (npm package). When using it, you should change all create-react-basic names to the library names you want.

## Install

```bash
npm install --save create-react-basic
```

## Demo
Demo and playground are available [here](https://bonnv79.github.io/create-react-basic/)

## Versions
[CHANGELOG](CHANGELOG.md)

## Usage Example
```JavaScript
import React from 'react';
import Component from 'create-react-basic';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <Component value={value} onChange={setValue} />
  );
};
```

## Develop

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deploy

To deploy the library you do the following steps:

1. Skip this step if you have done it before
### `npm install`

2. You can run:
### `npm run deploy`

Runs the app in the github mode.\
Open [https://bonnv79.github.io/create-react-basic/](https://bonnv79.github.io/create-react-basic/) to view it in the browser.

## Publish

To deploy the library you do the following steps:

1. Skip this step if you have done it before
### `npm install`

2. Next you run the syntax:
### `npm run compile`

3. To complete publish you run the syntax:
### `npm publish`

You can access your library by following the link below.\
Open [https://www.npmjs.com/package/create-react-basic](https://www.npmjs.com/package/create-react-basic) to view it in the browser.

## License

MIT © [bonnv79](https://github.com/bonnv79)
