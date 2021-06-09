import {combineExtensions} from 'micromark-util-combine-extensions'
import expression from 'micromark-extension-mdx-expression'
import jsx from 'micromark-extension-mdx-jsx'
import md from 'micromark-extension-mdx-md'

export function mdx() {
  return combineExtensions([expression(), jsx(), md])
}
