# FNM

Node version manager written in Rust. https://github.com/Schniz/fnm

Works well with `pnpm`.

- [ ] Compare `fnm` with the environments function from `pnpm`

```bash
# download and install
curl -fsSL https://fnm.vercel.app/install | bash
exec $SHELL

# list remote node versions
fnm list-remote
# node versions with a name in parenthesis are LTS versions

# install specific node version
fnm install v17.6.0
```
