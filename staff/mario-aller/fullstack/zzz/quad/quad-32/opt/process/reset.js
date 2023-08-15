const fs = require('fs')

try {

    const data = fs.readFileSync('wrkpanel-null.txt','utf8')
    fs.writeFileSync('wrkpanel.txt', data)
    console.log('Reset done.')
}
catch (error) { console.error(error) }