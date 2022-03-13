# Node Version Manager

## nvm install

[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

```bash
# download and pipe the install script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

# reload shell
exec $SHELL

# verify install
command -v nvm

# check if build dependencies are installed (Debian/Ubuntu)
dpkg -s build-essential libssl-dev | grep Status
```

## nvm commands

```bash
# install latest version
nvm install node # "node" is an alias for the latest version

# Use the latest version
nvm use node

# Use a specific version
nvm use 13.8.0

# List installable versions
nvm ls-remote

# Check node version
node --version

# Check out what versions of Node.js are installed on your machine
nvm ls

# Install a specific node version (replace [version_number] by the desired version)
nvm install [version_number]

```

### .nvmrc

```
# https://github.com/nvm-sh/nvm#nvmrc
You can create a .nvmrc file containing a node version number (or any other string that nvm understands; see nvm --help for details) in the project root directory (or any parent directory). Afterwards, nvm use, nvm install, nvm exec, nvm run, and nvm which will use the version specified in the .nvmrc file if no version is supplied on the command line.
```
