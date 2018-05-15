export default
class ErrorListener {

  constructor() {
    this.syntaxErrors = []
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, error) {
    let row = line - 1
    let start, token
    if (offendingSymbol) {
      start = offendingSymbol.start
      token = offendingSymbol.text
    }
    this.syntaxErrors.push({
      type: "syntax-error",
      row, column, start, token,
      msg, error
    })
  }

  reportAttemptingFullContext() {
    console.error('Attempting Full Context: ', arguments)
  }

  reportAmbiguity() {
    console.error('Ambiguity:', arguments)
  }

  reportContextSensitivity() {
    console.error('ContextSensitivity:', arguments)
  }

}
