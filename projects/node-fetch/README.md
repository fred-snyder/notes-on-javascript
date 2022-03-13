# Readme

```bash
# install node-fetch
npm i node-fetch
# flag explainers:
# -S or --save for dependencies # from npm 5.0.0 modules are added as a dependency by default
# -D  or --save-dev for development dependencies
```

```json
{
  "name": "node-fetch-demo",
  "main": "fetch.js",
  // etc, etc
  "dependencies": {
    "node-fetch": "^3.1.0"
  },
  "type": "module" // make sure to add "type": "module" to the package.json
  // otherwise imports don't work
}
```
