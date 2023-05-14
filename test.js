import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdx} from './index.js'

test('markdown -> html (micromark)', async function () {
  assert.equal(
    micromark('<div>\n{asd}\n</div>', {extensions: [mdx()]}),
    '\n\n',
    'should work'
  )
})
