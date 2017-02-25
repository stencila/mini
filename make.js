let b = require('substance-bundler')
let tests = require('substance-test/install')
let path = require('path')

const DIST = 'dist/'
const TEST ='.test/'
const TMP ='tmp/'

function _generateParser() {
  // TODO: generate parser using
  // java -jar ./.bin/antlr-4.6-complete.jar -Dlanguage=JavaScript -no-listener -no-visitor parser/Expr.g4
  b.custom('Generating parser', {
    src: './parser/Expr.g4',
    dest: './parser/ExprParser.js',
    execute: () => {
      let exec = require('child_process').exec
      return new Promise(function(resolve, reject) {
        exec('java -jar ./.bin/antlr-4.6-complete.jar -o parser -Dlanguage=JavaScript -no-visitor parser/Expr.g4', (err) => {
          if (err) {
            reject(new Error(err))
          } else {
            resolve()
          }
        })
      });
    }
  })
  b.js('./parser/.parser.js', {
    target: {
      dest: './parser/parser.js',
      format: 'es'
    },
    alias: {
      'antlr4/index': path.join(__dirname, '/vendor/antlr4.js')
    },
    commonjs: true
  })
}

function _buildLib() {
  b.js('src/index.js', {
    targets: [{
      dest: DIST+'expression.cjs.js',
      format: 'cjs'
    }, {
      dest: DIST+'expression.js',
      format: 'umd', moduleName: 'substanceExpression'
    }],
  })
}

// ATM you we need to checkout the whole project and build a vendor bundle
b.task('antlr4', () => {
  b.browserify('../antlr4/runtime/JavaScript/src/antlr4/index', {
    dest: './vendor/antlr4.js',
    exports: ['default'],
    debug: false
  })
})

b.task('clean', () => {
  b.rm('tmp')
  b.rm('dist')
})

b.task('parser', _generateParser)

b.task('lib', ['parser'], _buildLib)

// EXPERIMENTAL: helper to create task for building test-suite
tests.install(b, 'test', {
  src: './test/index.js',
  dest: TEST,
  title: 'Substance Expression'
})

b.task('default', ['clean', 'lib'])

b.setServerPort(5551)
b.serve({ static: true, route: '/test', folder: TEST })
b.serve({ static: true, route: '/', folder: '.' })
