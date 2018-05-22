# Personal Page Admin - NodeJS

> Description
# Table of Contents

-   [Support](https://github.com/nodejs/node/blob/master/README.md#support)
-   [Release Types](https://github.com/nodejs/node/blob/master/README.md#release-types)
    -   [Download](https://github.com/nodejs/node/blob/master/README.md#download)
        -   [Current and LTS Releases](https://github.com/nodejs/node/blob/master/README.md#current-and-lts-releases)
        -   [Nightly Releases](https://github.com/nodejs/node/blob/master/README.md#nightly-releases)
        -   [API Documentation](https://github.com/nodejs/node/blob/master/README.md#api-documentation)
    -   [Verifying Binaries](https://github.com/nodejs/node/blob/master/README.md#verifying-binaries)
-   [Building Node.js](https://github.com/nodejs/node/blob/master/README.md#building-nodejs)
-   [Security](https://github.com/nodejs/node/blob/master/README.md#security)
-   [Current Project Team Members](https://github.com/nodejs/node/blob/master/README.md#current-project-team-members)
    -   [TSC (Technical Steering Committee)](https://github.com/nodejs/node/blob/master/README.md#tsc-technical-steering-committee)
    -   [Collaborators](https://github.com/nodejs/node/blob/master/README.md#collaborators)
    -   [Release Team](https://github.com/nodejs/node/blob/master/README.md#release-team)
-   [Contributing to Node.js](https://github.com/nodejs/node/blob/master/README.md#contributing-to-nodejs)

## Overview

Little description

## Clone

```bash
git clone https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs.git
git remote rm origin
git remote add origin <your-git-path>
```

## .babelrc

Here you can specify the version of Nodejs that you want the code to compile to. 

```json
{
  "presets": [
    ["env", {
      "targets": {
        "node": "8.11.1"
      },
      "test": {
        "plugins": [ "istanbul" ]
      }
    }]
  ]
}
```
## Requirements

* **NodeJs:** 8.11.1 or above
* **Npm:** 5.6.0 or above
* **Yarn:** 1.6.0  or above
## Installation

1. ### NodeJs
2. ### Npm
3. ### Yarn
First, you have to install [Yarn](https://yarnpkg.com/lang/en/docs/install/). Then:


4. ### Foreman

```bash
# This will install all dependencies from package.json
 yarn install
 ```
 
```bash
# We use foreman to load the environment variables from `.env` file.
# This is important to prevent accidental commit of sensitive data to github
 yarn global add foreman
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
DB_USER=user
DB_PASS=123456
DB_NAME=testdb
DB_HOST=localhost
```

## Developing

```bash
$ nf start
```

## Test

You can use any reporters that are supported by istanbul: `clover`, `cobertura`, `html`, `json-summary`, `json`, `lcov`, `lcovonly`, `none`, `teamcity`, `text-lcov`, `text-summary`, `text`.

```
$ yarn test
```

## Report

```
$ yarn cover
```

## Build

```
$ yarn build
```

## Running with Docker

To run the server on a Docker container, please execute the following from the root directory:

### building the image
```bash
docker build -t swagger_server .
```
### starting up a container
```bash
docker run -p 3000:3000 swagger_server
```
## Contributing

Contributions welcome! See the  [Contributing Guide](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/blob/master/CONTRIBUTING.md).

## Author

Created and maintained by Javier Hernán Caballero García ([@ealeksandrov](https://twitter.com/ealeksandrov)).

## License

GNU General Public License v3.0

See  [LICENSE](https://github.com/Javier-Caballero-Info/personal_page_admin_nodejs/blob/master/LICENSE)
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjA1MjY2MTgyLDgwMjI5OTE4MV19
-->