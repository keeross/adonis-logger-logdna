## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = ["@bitkidd/adonis-logger-logdna/providers/LogdnaProvider"];
```

Add new configuration inside `logger` module in `config/app.js`:

```js
logdna: {
  driver: 'logdna',
  key: Env.get('LOGDNA_API_KEY', ''),
  level: 'info',
  hostname: '',
  ip: '',
  mac: '',
  app: '',
  env: '',
  index_meta: true
}
```

That's all! Now you can use the provider by pulling it from IoC container

```js
const Logger = use("Logger");

Logger.inf0("Test message");
```

## Env variables

The `LogDNA` driver relies on sinle Env variable: `LOGDNA_API_KEY=`.
