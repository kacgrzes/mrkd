/* eslint-env mocha */
import { assert } from 'chai'
import Scanner from '../src/Scanner'

suite('Scanner', () => {
  const text = `hello
    world
  `
  const scanned = Scanner(text)

  setup(() => {
    scanned.reset()
  })

  test('should stay on the same position', () => {
    scanned.peek()

    assert.equal('h', scanned.peek())
  })

  test('should move to next position', () => {
    scanned.next()

    assert.equal('e', scanned.peek())
  })

  test('should reset position back to 0', () => {
    const firstLetter = scanned.peek()
    scanned.next()
    scanned.next()
    scanned.next()
    const fourthLetter = scanned.peek()

    assert.notEqual(firstLetter, fourthLetter)

    scanned.reset()

    const firstLetterAgain = scanned.peek()

    assert.equal(firstLetter, firstLetterAgain)
  })

  test('should NOT be at the end position', () => {
    scanned.next()

    assert.equal(false, scanned.eof())
  })

  test('should be at the end position', () => {
    while (!scanned.eof()) {
      scanned.next()
    }

    assert.equal('', scanned.peek())
    assert.equal(true, scanned.eof())
  })
})
