/**
 * @typedef {import('micromark-util-types').Extension} Extension
 */

import {combineExtensions} from 'micromark-util-combine-extensions'
// @ts-expect-error: next
import expression from 'micromark-extension-mdx-expression'
// @ts-expect-error: next
import jsx from 'micromark-extension-mdx-jsx'
// @ts-expect-error: next
import md from 'micromark-extension-mdx-md'

/**
 * @returns {Extension}
 */
export function mdx() {
  // @ts-expect-error: It’s fine.
  return combineExtensions([expression(), jsx(), md])
}
