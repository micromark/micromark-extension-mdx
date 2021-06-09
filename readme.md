# micromark-extension-mdx

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[micromark][]** extension to support MDX (agnostic to JS).
Use [`micromark-extension-mdxjs`][mdxjs] instead to support MDX.js.

This package provides the low-level modules for integrating with the micromark
tokenizer but has no handling of compiling to HTML: go to a syntax tree instead.

## When to use this

You should probably use [`micromark-extension-mdxjs`][mdxjs] instead, which
supports JavaScript.
Alternatively, if you don’t want JavaScript-aware parsing, use this package.

If you don’t need all of MDX, the extensions can be used separately:

*   [`micromark/micromark-extension-mdx-expression`][mdx-expression]
    — support MDX (or MDX.js) expressions
*   [`micromark/micromark-extension-mdx-jsx`][mdx-jsx]
    — support MDX (or MDX.js) JSX
*   [`micromark/micromark-extension-mdx-md`][mdx-md]
    — turn some markdown features off for MDX (or MDX.js)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install micromark-extension-mdx
```

## Use

```js
import {micromark} from 'micromark'
import {mdx} from 'micromark-extension-mdx'

const output = micromark('a <b /> c {1 + 1} d', {extensions: [mdx()]})

console.log(output)
```

Yields:

```html
<p>a  c  d</p>
```

…which is rather useless: go to a syntax tree with
[`mdast-util-from-markdown`][from-markdown] and
[`mdast-util-mdx`][mdast-util-mdx] instead.

## API

This package exports the following identifiers: `mdx`.
There is no default export.

### `mdx()`

A function that can be called which returns an extension for micromark to parse
MDX (can be passed in `extensions`).
There are no options yet.

## Related

*   [`micromark/micromark`][micromark]
    — the smallest commonmark-compliant markdown parser that exists
*   [`micromark/micromark-extension-mdxjs`][mdxjs]
    — micromark extension to support MDX.js
*   [`micromark/micromark-extension-mdx-expression`][mdx-expression]
    — micromark extension to support MDX (or MDX.js) expressions
*   [`micromark/micromark-extension-mdx-jsx`][mdx-jsx]
    — micromark extension to support MDX (or MDX.js) JSX
*   [`micromark/micromark-extension-mdx-md`][mdx-md]
    — micromark extension to support misc MDX changes
*   [`syntax-tree/mdast-util-mdx`][mdast-util-mdx]
    — mdast utility to support MDX (or MDX.js)

## Contribute

See [`contributing.md` in `micromark/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/micromark/micromark-extension-mdx/workflows/main/badge.svg

[build]: https://github.com/micromark/micromark-extension-mdx/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/micromark/micromark-extension-mdx.svg

[coverage]: https://codecov.io/github/micromark/micromark-extension-mdx

[downloads-badge]: https://img.shields.io/npm/dm/micromark-extension-mdx.svg

[downloads]: https://www.npmjs.com/package/micromark-extension-mdx

[size-badge]: https://img.shields.io/bundlephobia/minzip/micromark-extension-mdx.svg

[size]: https://bundlephobia.com/result?p=micromark-extension-mdx

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/HEAD/contributing.md

[support]: https://github.com/micromark/.github/blob/HEAD/support.md

[coc]: https://github.com/micromark/.github/blob/HEAD/code-of-conduct.md

[micromark]: https://github.com/micromark/micromark

[mdxjs]: https://github.com/micromark/micromark-extension-mdxjs

[mdx-expression]: https://github.com/micromark/micromark-extension-mdx-expression

[mdx-jsx]: https://github.com/micromark/micromark-extension-mdx-jsx

[mdx-md]: https://github.com/micromark/micromark-extension-mdx-md

[mdast-util-mdx]: https://github.com/syntax-tree/mdast-util-mdx

[from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown
