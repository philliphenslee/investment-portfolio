const jsonOutput = require('./portfolio-data')

const data = JSON.parse(JSON.stringify(jsonOutput))

data.accounts.forEach(account => {
  account.positions.map(p => {
    console.log(p.shares)
  }) /* ? */
})
