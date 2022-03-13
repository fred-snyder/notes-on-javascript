# PNPM

## Installation and setup

https://pnpm.js.org/en/
https://pnpm.io/cli/add
https://pnpm.io/cli/add#--global


```bash
# install pnpm
npm install -g pnpm

# init new project and create the package.json
pnpm init

# init new project and set values to default
pnpm init -y

# add a new dependency
pnpm add [PACKAGE_NAME]

# add a new dev-dependency
pnpm add [PACKAGE_NAME] --save-dev
pnpm add [PACKAGE_NAME] -D # short form

# install a package globally
pnpm add [PACKAGE_NAME] --global

# list globally installed packages
pnpm ls -g
```

## Install and use the specified version of Node.js

You can also manage the Node.js environment with PNPM: https://pnpm.io/cli/env

```bash
pnpm env use --global lts # latest lts
pnpm env use --global argon # LTS codename
pnpm env use --global 16 # by version number

pnpm env use --global latest # latest version

# pre-releases
pnpm env use --global nightly
pnpm env use --global rc
pnpm env use --global 16.0.0-rc.0
pnpm env use --global rc/14
```
