const rp = require('request-promise')

module.exports = async function(city = '') {
  if (!city) {
    throw new Error('Название города не может быть пустым')
  }

  console.log('city:', city)
}