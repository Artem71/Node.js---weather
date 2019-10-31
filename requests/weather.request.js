const rp = require('request-promise')

module.exports = async function(city = '') {
  if (!city) {
    throw new Error('Название города не может быть пустым')
  }

  const key = '1239d38c25b99afa42c6d427af813b77'
  const uri = 'http://api.openweathermap.org/data/2.5/weather'
  const options = {
    uri,
    qs: {
      appid: key,
      q: city,
      units: 'imperial'
    },
    json: true
  }

  try {
    const data = await rp(options)
    const celsius = (data.main.temp - 32) * 5/9

    return {
      weather: `${data.name}: ${celsius.toFixed(0)}`,
      error: null
    }
  } catch (error) {
    return {
      weather: null,
      error: error.error.message
    }
  }
 
}