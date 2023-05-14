/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */

import {mdxExpression} from 'micromark-extension-mdx-expression'
import {mdxJsx} from 'micromark-extension-mdx-jsx'
import {mdxMd} from 'micromark-extension-mdx-md'
import {combineExtensions} from 'micromark-util-combine-extensions'

/**
 * Create an extension for `micromark` to enable MDX syntax, unaware of
 * JavaScript.
 *
 * @returns {Extension}
 *   Extension for `micromark` that can be passed in `extensions` to enable MDX
 *   syntax, unaware of JavaScript.
 */
export function mdx() {
  return combineExtensions([mdxExpression(), mdxJsx(), mdxMd])
}
