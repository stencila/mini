export default
class ErrorListener {

  constructor() {
    this.syntaxErrors = []
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, error) {
    let expectedTokens
    if (error) {
      expectedTokens = error.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames)
    }
    this.syntaxErrors.push({
      type: "syntax-error",
      row: line - 1,
      column,
      start: offendingSymbol.start,
      token: offendingSymbol.text,
      msg: msg,
      error,
      expectedTokens,
    })
  }
}
