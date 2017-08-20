/* eslint-env mocha */
import { assert } from 'chai'
import sanitize from '../src/sanitize'

suite('Sanitizer', () => {
  test('should sanitze tabs', () => {
    assert.equal(sanitize(`hello\tworld`), `hello    world`)
  })

  test('should sanitze unicode no-break space symbol', () => {
    assert.equal(sanitize(`hello\u00a0world`), `hello world`)
  })

  test('should sanitze unicode new line', () => {
    assert.equal(sanitize(`hello\u2424world`), `hello\nworld`)
  })

  test('should sanitize caret return', () => {
    assert.equal(sanitize(`hello\r\nworld`), `hello\nworld`)
    assert.equal(sanitize(`hello\rworld`), `hello\nworld`)
  })
})
