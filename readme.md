# babel-plugin-gist

[![Build Status](https://travis-ci.org/rhiokim/babel-plugin-gist.svg?branch=master)](https://travis-ci.org/rhiokim/babel-plugin-gist)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> import from gist!!!!!!!!!!!!!

Inspire by https://github.com/akameco/babel-plugin-twitter

## Install

```
$ yarn add --dev babel-plugin-gist
```

## Usage

.babelrc

```js
{
  "plugins": ["babel-plugin-gist"]
}
```

## Examples

```js
import sum from 'gist:rhiokim/badfbe21fb86dbbe031cac85bdc2043a#file-sum-js'
import minus from 'gist:rhiokim/badfbe21fb86dbbe031cac85bdc2043a#file-sum-js'

console.log(sum(1, 5)) // 6
console.log(minus(5, 1)) // 4
```

More Example?

open `examples/index.js` and coding! And `yarn run example` :)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-plugin-twitter/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-plugin-twitter/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-plugin-twitter/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars3.githubusercontent.com/u/145777?v=4" width="100px;"/><br /><sub><b>Rhio Kim</b></sub>](http://rhio.tistory.com)<br />[💻](https://github.com/akameco/babel-plugin-twitter/commits?author=rhiokim "Code") [📖](https://github.com/akameco/babel-plugin-twitter/commits?author=rhiokim "Documentation") [💡](#example-rhiokim "Examples") [⚠️](https://github.com/akameco/babel-plugin-twitter/commits?author=rhiokim "Tests") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions
of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
