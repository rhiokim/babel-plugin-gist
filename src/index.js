// @flow weak
import { transform } from 'babel-core'
import { decodeHTML as decode } from 'entities'
import Cache from './cache'
import gist from './gist'
// import blog from 'babel-log'

const cache = new Cache()

const getGist = id => {
  if (cache.has(id)) {
    return cache.get(id)
  }
  const text = gist(id)
  cache.set(id, text)
  return decode(text)
}

export default ({ types: t, traverse, template }) => {
  const builder = template(`const NAME = BODY`)

  const importDeclaration = path => {
    const { node: src } = path.get('source.value')
    const { node: name } = path.get('specifiers.0.local.name')
    if (src && src.startsWith('gist:')) {
      const id = src.replace('gist:', '')
      const { ast } = transform(getGist(id))
      traverse(ast, {
        ExportDefaultDeclaration(gistPath) {
          // export default ...
          const decPath = gistPath.get('declaration')
          const output = builder({ NAME: t.identifier(name), BODY: decPath })
          path.replaceWith(output)
        },
      })
    }
  }

  return {
    name: 'gist',
    visitor: {
      ImportDeclaration: importDeclaration,
    },
  }
}
