This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# UWC Blog

UWC Blog is a personal blog for my experience at UWCiM. The project is made using ReactJS, html and css.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install.

```bash
yarn
```

## Usage

Use [uwcblog-api](https://github.com/HristoStoynov/uwcblog-api) as back-end by changing .env with your port, database key, database url and cookie and start the server:
 
```bash
yarn
yarn start
```
You can start [uwcblog](https://github.com/HristoStoynov/uwcblog) that way too:
```bash
yarn start
```

## Architecture
The projects has two main folders - ./src and ./public as well as four main files - .gitignore, README.md, package.json and yarn.lock. The ./public folder includes index.html and the React app is in ./src which is divided in components, pages, images and utils.
