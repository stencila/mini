const b = require('substance-bundler')
const path = require('path')
const fs = require('fs')
const run = require('substance-bundler/extensions/fork')

const DIST = 'dist/'
const TMP ='tmp/'

function _bundleANTLR4() {
  b.browserify('../antlr4/runtime/JavaScript/src/antlr4/index', {
    dest: './vendor/antlr4.js',
    exports: ['default'],
    debug: false
  })
}

function _generateParser() {
  // we can not build the parser without ANTLR4
  // still we don't fail so that travis is working (generated parser is checked in)
  if (!fs.existsSync('./.bin/antlr-4.6-complete.jar')) return
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
  b.js('index.js', {
    targets: [{
      dest: DIST+'substance-mini.cjs.js',
      format: 'cjs'
    }, {
      dest: DIST+'substance-mini.js',
      format: 'umd', moduleName: 'substanceMini'
    }],
    external: {
      'substance': 'substance'
    }
  })
}

function _buildTestsBrowser() {
  b.js('./test/index.js', {
    target: {
      dest: TMP+'tests.js',
      format: 'umd', moduleName: 'tests'
    },
    external: {
      'substance': 'window.substance',
      'substance-mini': 'window.substanceMini',
      'substance-test': 'window.substanceTest'
    }
  })
}

function _buildTestsCov() {
  b.js('./test/index.js', {
    target: {
      dest: TMP+'tests.cov.js',
      format: 'cjs'
    },
    alias: {
      'substance-mini': path.join(__dirname, 'index.js')
    },
    external: ['substance-test', 'substance'],
    istanbul: {
      include: ['src/*.js']
    }
  })
}

// ATM you we need to checkout the whole project and build a vendor bundle
b.task('antlr4', _bundleANTLR4)

b.task('clean', () => {
  b.rm(TMP)
  b.rm(DIST)
  b.rm('coverage')
})

b.task('parser', _generateParser)

b.task('lib', ['parser'], _buildLib)

b.task('test:browser', ['lib'], () => {
  _buildTestsBrowser()
})

b.task('test', ['lib'], () => {
  const coverage = require.resolve('substance-test/bin/coverage')
  const tests = './tmp/tests.cov.js'
  _buildTestsCov()
  run(b, coverage, tests)
})

b.task('default', ['clean', 'lib'])

b.setServerPort(5551)
b.serve({ static: true, route: '/', folder: '.' })
