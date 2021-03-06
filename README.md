# Personal Page Admin - NodeJS

> NodeJS API REST Full with ExpressJS and Firebase database
## Table of Contents

-   [Overview](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master/README.md#overview)
-   [API Description](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master/README.md#api_description)
-   [Clone](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master/README.md#clone)
-   [Babelrc](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master/README.md#babelrc)
- [Requirements](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#requirements)
- [Installation](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#installation)
	- [Nodejs and Npm](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#nodejs-and-npm)
	- [Yarn](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#yarn)
	- [Foreman](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#foreman)
	- [Dependencies](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#dependencies)
- [Add/Remove packages](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#addremove-packages)
- [Environment](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#environment)
- [Developing](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#developing)
- [Test](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#test)
- [Report](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#report)
- [Build](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#build)
- [Running with Docker](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#running-with-docker)
	- [Building the image](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#building-the-image)
	- [Starting up a container](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#starting-up-a-container)
- [Contributing](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#contributing)
- [Author](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#author)
- [License](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/tree/master#license)

## Overview

This is a content administration api for my Personal Page. Each endpoint correspond with a section of the page. The idea with the project is proof the concept of microservice a little scale. Exist others endpoints to manage different behaviors.

## API Description

For more information about the endpoints of the API please check the [apiary doc](https://personalpageadminnodejs.docs.apiary.io).

## Clone

```bash
git clone https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs.git
git remote rm origin
git remote add origin <your-git-path>
```

## Babelrc

Here you can specify the version of Nodejs (`.babelrc` file) that you want the code to compile to. 

```json
{
  "presets": [
    ["env", {
      "targets": {
        "node": "9.11.1"
      },
      "test": {
        "plugins": [ "istanbul" ]
      }
    }]
  ]
}
```
## Requirements

* **NodeJs:** 9.11.1 or above
* **Npm:** 5.6.0 or above
* **Yarn:** 1.6.0  or above
## Installation

1. ### NodeJs and Npm
Latest LTS Version: **9.11.1** (includes npm 5.6.0)

- Debian / Ubuntu
```bash
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
```

```bash
sudo apt install -y nodejs
```

```bash
sudo apt install -y build-essential
```

- MacOS

	- Bash
	```bash
	curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
	```
	- Brew
	```bash
	brew install node
	```
	- MacPorts
	```bash
	port install nodejs9
	```

- Windows

	- Chocolatey
	```bash
	cinst nodejs.install
	```
	- Scoop
	```bash
	scoop install nodejs
	```
	- MSI installer
	Download [here](http://nodejs.org/#download) the installer.

For more details, please visit [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager/).


2. ### Yarn

- Debian / Ubuntu
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
```bash
sudo apt update
```
```bash
sudo apt install --no-install-recommends yarn
```

- MacOS

	- Brew
	```bash
	brew install yarn --without-node
	```
	- MacPorts
	```bash
	sudo port install yarn
	```

- Windows

	- Chocolatey
	```bash
	choco install yarn
	```
	- Scoop
	```
	scoop install yarn
	```
	- MSI installer
	Download [here](https://yarnpkg.com/latest.msi) the installer.

For more details, please visit [https://yarnpkg.com/lang/en/docs/install](https://yarnpkg.com/lang/en/docs/install/).
	
3. ### Foreman
We use foreman to load the environment variables from `.env` file. This is important to prevent accidental commit of sensitive data to github
```bash
 yarn global add foreman
```

4. ### Dependencies

This will install all dependencies from package.json

```bash
 yarn install
 ``` 
 
## Add/Remove packages

```bash
 yarn add <PACKAGE_NAME>
 yarn add --dev <PACKAGE_NAME>
 yarn remove <PACKAGE_NAME>
```

## Environment

For development, store all the environment variable in the `.env` file. This will be included in `.gitignore` so that it will not be commited to github.
Make sure you create the `.env` file or the service will not run.

The `.env` should contain the following:
```bash
PORT=3000
JWT_SECRET_KEY=jwt-secret-string # Secret key for JWT
JWT_SIGN_ALGORITHM=HS256 # Algorithm for JWT

# Firebase Credentials
DATABASE_URL=db.firebase.com # Url for Firebase database
DB_PRIVATE_KEY_ID=secret_id # Firebase private key id
DB_PRIVATE_KEY=secret # Firebase private key
DB_CLIENT_EMAIL=email@firebase.com # Firebase client email
DB_CLIENT_ID=some_client_id # Firebase client id
```

## Developing

Using `.env` config file
```bash
nf start
```
Or using `environment variables`
```
yarn dev
```

## Test

You can use any reporters that are supported by istanbul: `clover`, `cobertura`, `html`, `json-summary`, `json`, `lcov`, `lcovonly`, `none`, `teamcity`, `text-lcov`, `text-summary`, `text`.

>Setup the environment variables before run the command.

```
yarn test
```

## Report
>Setup the environment variables before run the command.
```
yarn cover
```

## Build

```
yarn build
```

## Running with Docker

To run the server on a Docker container, please execute the following from the root directory, after build the project:

### Building the image
```bash
docker build -t personal_page_admin_crud_nodejs .
```
### Starting up a container
```bash
docker run -p 3000:3000 -d \
-e JWT_SECRET_KEY="jwt-secret-string" \
-e JWT_SIGN_ALGORITHM="HS256" \
-e DATABASE_URL="db.firebase.com" \
-e DB_PRIVATE_KEY_ID="secret_id" \
-e DB_PRIVATE_KEY="secret" \
-e DB_CLIENT_EMAIL="email@firebase.com" \
-e DB_CLIENT_ID="some_client_id" \
personal_page_admin_crud_nodejs
```
## Contributing

Contributions welcome! See the  [Contributing Guide](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/blob/master/CONTRIBUTING.md).

## Author

Created and maintained by [Javier Hernán Caballero García](https://javiercaballero.info)).

## License

GNU General Public License v3.0

See  [LICENSE](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/blob/master/LICENSE)
