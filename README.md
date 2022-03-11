![main-image](./src/client/static/nlp.svg)

# Contents
- [Contents](#contents)
- [Introduction](#introduction)
- [Badges](#badges)
- [Page sections](#page-sections)
- [Installation](#installation)
  - [```Install```](#install)
  - [```Editing```](#editing)
  - [```Scripts```](#scripts)
    - [```npm start```](#npm-start)
    - [```npm run start:client```](#npm-run-startclient)
    - [```npm run build:dev```](#npm-run-builddev)
    - [```npm run build:prod```](#npm-run-buildprod)
    - [```npm run test```](#npm-run-test)
    - [```npm run test:watch```](#npm-run-testwatch)
- [Technologies](#technologies)
  - [Frontend](#frontend)
    - [HTML](#html)
    - [SCSS](#scss)
    - [Javascript](#javascript)
  - [Backend](#backend)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [License](#license)


# Introduction
Shows you the current weather based on your location. You can also add your feelings about the weather or anything.
# Badges
![submission](https://img.shields.io/badge/submission-pending-orange)
![issues](https://img.shields.io/github/issues/Diorla/Natural-Language-Processing)
![license](https://img.shields.io/github/license/Diorla/Natural-Language-Processing)
![code size](https://img.shields.io/github/languages/code-size/diorla/Natural-Language-Processing)
![forks](https://img.shields.io/github/forks/Diorla/Natural-Language-Processing)
![stars](https://img.shields.io/github/stars/Diorla/Natural-Language-Processing)
![programming languages](https://img.shields.io/github/languages/count/diorla/Natural-Language-Processing)
![top language](https://img.shields.io/github/languages/top/diorla/Natural-Language-Processing)
![commit status](https://img.shields.io/github/commit-status/diorla/Natural-Language-Processing/main/7df937a057fd003db526dbef3cebde16153a9c17)
![Package version](https://img.shields.io/github/package-json/v/diorla/Natural-Language-Processing)
![Last commit](https://img.shields.io/github/last-commit/diorla/Natural-Language-Processing)
![Commit activity](https://img.shields.io/github/commit-activity/w/diorla/Natural-Language-Processing)


# Page sections
- Header
- Main content
  - Form for submitting website url
  - Loader while waiting for response
  - The response renderer
- Footer

# Installation

## ```Install```
```sh
git clone https://github.com/Diorla/Natural-Language-Processing
```

## ```Editing```
Use any text-editor to update the content

## ```Scripts```

### ```npm start```
To start both server and client.

Opens at localhost:1960

### ```npm run start:client```

start the client only, opens at port 8080

Supports HMR

### ```npm run build:dev```

build client side with dev mode

### ```npm run build:prod```

build client side with production mode

### ```npm run test```

npm run test

### ```npm run test:watch```

npm run test in watch mode



# Technologies
This is divided into frontend and backend

## Frontend
> It can be found inside `src/client/`
### HTML
![HTML](https://img.shields.io/badge/HTML-document-dd4b25)

This is a single html file, `pages/index.html`, where all the initial content is loaded

### SCSS
![SCSS](https://img.shields.io/badge/CSS-style-orange)

These are saved inside `./styles` folders

### Javascript
![JS](https://img.shields.io/badge/JS-language-cfb430)

There is a single root file inside `./client/index.js`. Other js modules are saved inside `./client/js` folders and imported into `./client/index.js`


## Backend
> It can be found inside `src/server/`
The backend is written in `nodejs` and powered by `express.js`. it is found inside `./index.js`. It does the following
- Starts the server
- Handles routing
- Serves the `index.html` file
- Serves other static files
- Accepts `url` from the client side
- Fetch sentiment analysis results from `meaningcloud.com`
- Returns `nlp` analysis to the client side


# Dependencies
 - express
 - isomorphic-fetch
 - cors
 - colors

# Credits
- Favicons from [iconarchive](https://iconarchive.com/show/noto-emoji-people-clothing-objects-icons-by-google/12163-speech-balloon-icon.html) by [Google](https://iconarchive.com/artist/google.html)
- Loader icon from [loading.io](https://loading.io/)
- Readme image from [undraw](https://undraw.co/)

# License
This is under [MIT](https://choosealicense.com/licenses/mit/) license, for more details, please check [License.md](https://github.com/Diorla/Natural-Language-Processing/blob/main/LICENCE.md).

[(Back to top)](#contents)