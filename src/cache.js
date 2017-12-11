// @flow weak
import fs from 'fs'
import { join, sep } from 'path'
import findCacheDir from 'find-cache-dir'
import { name } from '../package.json' // eslint-disable-line

const flattenPath = (str: string): string => {
  return str.replace(sep, '-')
}

export default class Cache {
  dir: string
  constructor() {
    this.dir = findCacheDir({ name, create: true })
  }
  get(id) {
    try {
      return fs.readFileSync(join(this.dir, `${flattenPath(id)}.js`), 'utf8')
    } catch (err) {
      return null
    }
  }
  has(id) {
    return fs.existsSync(join(this.dir, `${flattenPath(id)}.js`))
  }
  set(id, body) {
    return fs.writeFileSync(
      join(this.dir, `${flattenPath(id)}.js`),
      body,
      'utf8',
    )
  }
}
