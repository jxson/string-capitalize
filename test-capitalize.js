
var test = require('prova')
var capitalize = require('./')

test('capitalize(string)', function(assert){
  assert.equal(capitalize('word'), 'Word')
  assert.equal(capitalize('word up'), 'Word up')
  assert.equal(capitalize('WORD UP'), 'Word up')
  assert.equal(capitalize(), '')
  assert.equal(capitalize(''), '')
  assert.equal(capitalize(null), '')
  assert.equal(capitalize(undefined), '')
  assert.end()
})
