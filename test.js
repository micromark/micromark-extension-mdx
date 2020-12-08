var test = require('tape')
var micromark = require('micromark')
var syntax = require('.')

test('markdown -> html (micromark)', function (t) {
  t.deepEqual(
    micromark('<div>\n{asd}\n</div>', {extensions: [syntax()]}),
    '\n\n',
    'should work'
  )

  t.end()
})
