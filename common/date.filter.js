export default (value, type) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
  }
  const date = new Date(value)
  if (type === 'date') {
    return date.toLocaleDateString()
  } else if (type === 'time') {
    return date.toLocaleTimeString()
  }
  return date.toLocaleString('ru', options)
}
