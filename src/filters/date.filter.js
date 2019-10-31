import Vue from 'vue'

function dateFilter (value, format = 'date', locale = 'ru-RU') {
  const options = {}
  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }
  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  return new Intl.DateTimeFormat(locale, options).format(value)
}

Vue.filter('date', dateFilter)
