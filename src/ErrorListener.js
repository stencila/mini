export default
class ErrorListener {

  constructor() {
    this.syntaxErrors = []
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, error) {
    const expectedTokens = error.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames)
    this.syntaxErrors.push({
      type: "syntax-error",
      row: line - 1,
      column,
      start: offendingSymbol.start,
      expectedTokens,
      token: offendingSymbol.text,
      text: msg,
      error
    })
  }
}
