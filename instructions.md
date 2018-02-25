## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-logger-logdna/providers/LogdnaProvider'
]
```

That's all! Now you can use the provider by pulling it from IoC container

```js
const Logger = use('Logger')

Logger.inf0('Test message')

```

## Env variables

The `LogDNA` driver relies on sinle Env variable: `LOGDNA_API_KEY=`.
