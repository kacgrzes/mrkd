// TODO: find a way to document this one
const Scanner = input => {
  let position = 0
  let line = 1
  let column = 0

  const NEW_LINE = '\n'
  const EMPTY_STRING = ''

  /** Gets next character at current position without moving forward. */
  const peek = () => input.charAt(position)

  /** Checks if character at current position is end of file. */
  const eof = () => peek() === EMPTY_STRING

  /** Gets next character and moves forward. */
  const next = () => {
    const ch = input.charAt(position)
    position++

    if (ch === NEW_LINE) {
      line++
      column = 0
    } else {
      column++
    }

    return ch
  }

  return {
    peek,
    eof,
    next
  }
}

export default Scanner
