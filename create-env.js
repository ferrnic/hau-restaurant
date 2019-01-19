const fs = require('fs')
fs.writeFileSync('./.env', `HOST=${process.env.HOST}\n`)
