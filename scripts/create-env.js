const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.APIS}\n`)