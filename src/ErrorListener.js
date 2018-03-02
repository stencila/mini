export default
class ErrorListener {

  /**
   * Constructor
   * 
   * @param  {Object} ignore Errors to ignore
   */
  constructor(ignore={}) {
    // Ignore incomplete expressions?
    if (ignore.incomplete !== false) ignore.incomplete = true
    this.ignore = ignore

    this.syntaxErrors = []
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, error) {
    if (this.ignore.incomplete) {
      // Ignore syntax errors that are often associated with incomplete expressions
      if (/^missing '.+' at '<EOF>'/.test(msg)) return
      if (/^mismatched input '<EOF>'/.test(msg)) return
    }

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
