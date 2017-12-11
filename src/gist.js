// @flow
import client from 'cheerio-httpcli'

export default (id: string) => {
  const files = id.split('#')
  const url = files[0]
  // const user = url[0]
  // const hash = url[1]
  const name = files[1]
  const selector = name ? `#${name} .highlight` : '.highlight'

  return client
    .fetchSync(`https://gist.github.com/${url}`)
    .$(selector)
    .text()
}
