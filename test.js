import test from 'tape'
import {micromark} from 'micromark'
import {mdx} from './index.js'

test('markdown -> html (micromark)', (t) => {
  t.deepEqual(
    micromark('<div>\n{asd}\n</div>', {extensions: [mdx()]}),
    '\n\n',
    'should work'
  )

  t.end()
})
