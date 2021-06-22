/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */

import {combineExtensions} from 'micromark-util-combine-extensions'
import {mdxExpression} from 'micromark-extension-mdx-expression'
import {mdxJsx} from 'micromark-extension-mdx-jsx'
import {mdxMd} from 'micromark-extension-mdx-md'

/**
 * @returns {Extension}
 */
export function mdx() {
  return combineExtensions([mdxExpression(), mdxJsx(), mdxMd])
}
