const chalk = require('chalk')

const formatedDate = new Date().toLocaleTimeString()
const logger = {
  info: message => {
    console.log(chalk.bold(`[${formatedDate}] - `), chalk.cyan.bold(message))
  },
  success: message => {
    console.log(chalk.bold(`[${formatedDate}] - `), chalk.green.bold(message))
  },
  error: message => {
    console.log(chalk.bold(`[${formatedDate}] - `), chalk.red.bold(message))
  },
  print: message => {
    console.log(chalk.bold(message))
  }
}

const printer = {
  info: message => {
    console.log(chalk.bold(message))
  },
  error: message => {
    console.log(chalk.red.bold(`Error: ${message}`))
  }
}

module.exports = { logger, printer }
