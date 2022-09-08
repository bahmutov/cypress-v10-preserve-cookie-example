const { defineConfig } = require('cypress')

// if using the database, need to provide MONGODB environment variable
const database = require('./app/database')

async function clearUsers() {
  console.log('clear users')
  await database.models.user.deleteMany({})
  return null
}

module.exports = defineConfig({
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { clearUsers })
    },
    supportFile: false,
    baseUrl: 'http://localhost:3000',
  },
})
