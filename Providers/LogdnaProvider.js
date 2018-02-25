'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const LogDNA = require('./drivers/LogDNA')

class LogdnaProvider extends ServiceProvider {
  register () {

    this.app.extend('Adonis/Src/Logger', 'logdna',  () => LogDNA )

  }
}

module.exports = LogdnaProvider
