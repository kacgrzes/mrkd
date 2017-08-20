const CARET_RETURN = /\r\n|\r/g
const TAB = /\t/g
const UNICODE_NO_BREAK_SPACE = /\u00a0/g
const UNICODE_NEW_LINE = /\u2424/g

const SPACES = '    '
const SPACE = ' '
const NEW_LINE = '\n'

const sanitize = text => {
  return text.replace(CARET_RETURN, NEW_LINE)
  .replace(TAB, SPACES)
  .replace(UNICODE_NO_BREAK_SPACE, SPACE)
  .replace(UNICODE_NEW_LINE, NEW_LINE)
}

export default sanitize
