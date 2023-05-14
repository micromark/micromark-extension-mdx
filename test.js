import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdx} from './index.js'

test('markdown -> html (micromark)', async function () {
  assert.deepEqual(
    // To do: next major: use export map, use package name here.
    Object.keys(await import('./index.js')).sort(),
    ['mdx'],
    'should expose the public api'
  )

  assert.equal(
    micromark('<div>\n{asd}\n</div>', {extensions: [mdx()]}),
    '\n\n',
    'should work'
  )
})
