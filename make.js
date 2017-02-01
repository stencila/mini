let b = require('substance-bundler')

b.task('antlr4', () => {
  b.copy('../antlr4/runtime/JavaScript/src/antlr4', './node_modules/antlr4')
})

b.task('clean', () => {
  b.rm('tmp')
  b.rm('dist')
})

b.task('parser', () => {
  // TODO: generate parser using
  // java -jar ./.bin/antlr-4.6-complete.jar -Dlanguage=JavaScript -no-listener -no-visitor parser/Expr.g4
  b.custom('Generating parser', {
    src: './parser/Expr.g4',
    dest: './parser/ExprParser.js',
    execute: () => {
      let exec = require('child_process').exec
      return new Promise(function(resolve, reject) {
        exec('java -jar ./.bin/antlr-4.6-complete.jar -Dlanguage=JavaScript -no-visitor parser/Expr.g4', (err) => {
          if (err) {
            reject(new Error(err))
          } else {
            resolve()
          }
        })
      });
    }
  })
  b.browserify('./parser/.parser.js', {
    dest: 'parser/parser.js',
    exports: ['parseExpression', 'evaluateExpression']
  })
  b.js('./parser/parser.js', {
    target: {
      dest: 'dist/parser.cjs.js',
      format: 'cjs'
    }
  })
})

b.task('default', ['clean', 'parser'])