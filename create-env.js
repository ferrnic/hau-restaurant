const fs = require('fs')
fs.writeFileSync('./.env', `
  HOST=${process.env.HOST}\n
  PASSWORD=${process.env.PASSWORD}\n
  USER=${process.env.USER}\n
`)
