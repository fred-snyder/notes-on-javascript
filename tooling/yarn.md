# Yarn

## Install yarn

```bash
# check npm install
npm --version

# install yarn globally
npm install -g yarn
npm i -g yarn
```

## yarn command

```bash
# Install dependencies from package.json
yarn
yarn install

# Add a Dependency
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

# Remove a package
yarn remove [package]
```

## npm command compared to yarn command

```bash
# one flag that you can find often is the -D flag
npm install <some-package> --save-dev

# The yarn equivalent is
yarn add <package...> [--dev/-D]
yarn add airtable -D
yarn add airtable --dev
```
