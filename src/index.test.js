// @flow
import path from 'path'
import rimraf from 'rimraf'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

jest.mock('./gist')
import gist from './gist' // eslint-disable-line

const code = `
export default (a, b) => a + b
`
// $FlowFixMe
gist.mockImplementation(() => code)

afterAll(() => {
  rimraf.sync(path.resolve(__dirname, '..', 'node_modules/.cache/'))
})

pluginTester({
  title: 'default',
  plugin,
  snapshot: true,
  tests: [
    `import sum from 'gist:rhiokim/badfbe21fb86dbbe031cac85bdc2043a#file-sum-js'`,
    {
      title: 'use cache',
      code: `
    import sum from 'gist:rhiokim/badfbe21fb86dbbe031cac85bdc2043a#file-sum-js'
    `,
    },
    {
      title: 'typo',
      code: `
    import sum from 'giiist:rhiokim/badfbe21fb86dbbe031cac85bdc2043a#file-sum-js'
    `,
    },
  ],
})
