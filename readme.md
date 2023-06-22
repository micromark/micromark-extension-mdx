# micromark-extension-mdx

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[micromark][] extensions to support [MDX][mdxjs], unaware of JavaScript.

## Contents

*   [What is this?](#what-is-this)
*   [When to use this](#when-to-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`mdx()`](#mdx)
*   [Authoring](#authoring)
*   [Syntax](#syntax)
*   [Errors](#errors)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package contains an extension that adds support for the syntax enabled
by [MDX][mdxjs] to [`micromark`][micromark].
This extension is used inside MDX.
It supports expressions, JSX, and turns some markdown features off.
It is not aware of the syntax of JavaScript inside expressions and does not
support export/imports.

## When to use this

You can use this extension when you are working with [`micromark`][micromark].

This project is useful when you want to support MDX, unaware of JavaScript, for
example because expressions can include Rust or variables or whatnot.
If you want to be aware of JavaScript, use
[`micromark-extension-mdxjs`][micromark-extension-mdxjs].

Alternatively, you can also use the underlying syntax extensions separately:

*   [`micromark-extension-mdx-expression`][micromark-extension-mdx-expression]
    — support MDX expressions
*   [`micromark-extension-mdx-jsx`][micromark-extension-mdx-jsx]
    — support MDX JSX
*   [`micromark-extension-mdx-md`][micromark-extension-mdx-md]
    — turn some CommonMark features off

When you need a syntax tree, combine this package with
[`mdast-util-mdx`][mdast-util-mdx].

All these packages are used in [`remark-mdx`][remark-mdx], which focusses on
making it easier to transform content by abstracting these internals away.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install micromark-extension-mdx
```

In Deno with [`esm.sh`][esmsh]:

```js
import {mdx} from 'https://esm.sh/micromark-extension-mdx@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {mdx} from 'https://esm.sh/micromark-extension-mdx@2?bundle'
</script>
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

…which is useless: go to a syntax tree with
[`mdast-util-from-markdown`][mdast-util-from-markdown] and
[`mdast-util-mdx`][mdast-util-mdx] instead.

## API

This package exports the identifier [`mdx`][api-mdx].
There is no default export.

The separate extensions support the [`development` condition][development].
Run `node --conditions development module.js` to get instrumented dev code.
Without this condition, production code is loaded.

### `mdx()`

Create an extension for `micromark` to enable MDX syntax, unaware of JavaScript.

###### Returns

Extension for `micromark` that can be passed in `extensions` to enable MDX
syntax, unaware of JavaScript ([`Extension`][micromark-extension]).

## Authoring

For recommendations on how to author MDX, see each corresponding readme:

*   [expressions](https://github.com/micromark/micromark-extension-mdx-expression/tree/main/packages/micromark-extension-mdx-expression#authoring)
*   [JSX](https://github.com/micromark/micromark-extension-mdx-jsx#authoring)
*   [CommonMark features not in MDX](https://github.com/micromark/micromark-extension-mdx-md#authoring)

## Syntax

For info on the syntax of these features, see each corresponding readme:

*   [expressions](https://github.com/micromark/micromark-extension-mdx-expression/tree/main/packages/micromark-extension-mdx-expression#syntax)
*   [JSX](https://github.com/micromark/micromark-extension-mdx-jsx#syntax)
*   CommonMark features not in MDX: n/a

## Errors

For info on what errors are thrown, see each corresponding readme:

*   [expressions](https://github.com/micromark/micromark-extension-mdx-expression/tree/main/packages/micromark-extension-mdx-expression#errors)
*   [JSX](https://github.com/micromark/micromark-extension-mdx-jsx#errors)
*   CommonMark features not in MDX: n/a

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`micromark-extension-mdx@^2`, compatible with Node.js 16.

This package works with `micromark` version `3` and later.

## Security

This package is safe.

## Related

*   [`micromark-extension-mdxjs`][micromark-extension-mdxjs]
    — support MDX aware of JS
*   [`mdast-util-mdx`][mdast-util-mdx]
    — support MDX in mdast
*   [`remark-mdx`][remark-mdx]
    — support MDX syntax in remark

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

[size-badge]: https://img.shields.io/badge/dynamic/json?label=minzipped%20size&query=$.size.compressedSize&url=https://deno.bundlejs.com/?q=micromark-extension-mdx

[size]: https://bundlejs.com/?q=micromark-extension-mdx

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/micromark/micromark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/micromark/.github/blob/main/contributing.md

[support]: https://github.com/micromark/.github/blob/main/support.md

[coc]: https://github.com/micromark/.github/blob/main/code-of-conduct.md

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[development]: https://nodejs.org/api/packages.html#packages_resolving_user_conditions

[micromark]: https://github.com/micromark/micromark

[micromark-extension]: https://github.com/micromark/micromark#syntaxextension

[micromark-extension-mdxjs]: https://github.com/micromark/micromark-extension-mdxjs

[micromark-extension-mdx-expression]: https://github.com/micromark/micromark-extension-mdx-expression

[micromark-extension-mdx-jsx]: https://github.com/micromark/micromark-extension-mdx-jsx

[micromark-extension-mdx-md]: https://github.com/micromark/micromark-extension-mdx-md

[mdast-util-from-markdown]: https://github.com/syntax-tree/mdast-util-from-markdown

[mdast-util-mdx]: https://github.com/syntax-tree/mdast-util-mdx

[remark-mdx]: https://mdxjs.com/packages/remark-mdx/

[mdxjs]: https://mdxjs.com

[api-mdx]: #mdx
