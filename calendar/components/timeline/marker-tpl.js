/**
 * Returns compiled template. Some template engine should be used in production
 * use case.
 *
 * @param {Object} data
 * @return {String}
 */
export function compile(data) {
  const timeClass = data.classes[data.suffix ? 'timeWithSuffix' : 'time']
  let html = `<span class="${timeClass}">${data.time}</span>`
  if (data.suffix) {
    html += `<span class="${data.classes.time}">${data.suffix}</span>`
  }
  return html
}
