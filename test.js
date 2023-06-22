import assert from 'node:assert/strict'
import test from 'node:test'
import {micromark} from 'micromark'
import {mdx} from 'micromark-extension-mdx'

test('markdown -> html (micromark)', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('micromark-extension-mdx')).sort(),
      ['mdx']
    )
  })

  await t.test('should work', async function () {
    assert.equal(
      micromark('<div>\n{asd}\n</div>', {extensions: [mdx()]}),
      '\n\n'
    )
  })
})
