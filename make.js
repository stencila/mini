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

// NOTE: this is needed when working on versions from github
function _buildDeps() {
  const subsDist = path.join(__dirname, 'node_modules/substance/dist')
  if (!fs.existsSync(path.join(subsDist,'substance.js')) ||
      !fs.existsSync(path.join(subsDist, 'substance.cjs.js'))) {
    b.make('substance')
  }
}

function _buildLib() {
  _buildDeps()

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

function _buildTestsNodejs() {
  b.js('./test/index.js', {
    target: {
      dest: TMP+'tests.cjs.js',
      format: 'cjs'
    },
    alias: {
      'substance-mini': path.join(__dirname, 'index.js')
    },
    external: ['substance-test', 'substance']
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

b.task('clean', () => {
  b.rm(TMP)
  b.rm(DIST)
  b.rm('coverage')
})
.describe('Cleans up temporary and build folders.')

// ATM you we need to checkout the whole project and build a vendor bundle
b.task('antlr4', _bundleANTLR4)
.describe('Prebundle antlr4.js')

b.task('parser', _generateParser)
.describe('Generates the parser.\nRequires a clone of https://github/antlr4/antlr4.git as sibling folder')

b.task('lib', ['parser'], _buildLib)
.describe('Builds the library into dist folder.')

b.task('test:browser', ['lib'], () => {
  _buildTestsBrowser()
})
.describe('Builds the test-suite to be run from test/index.html.')

b.task('test', ['lib'], () => {
  const test = require.resolve('substance-test/bin/test')
  const tests = './tmp/tests.cjs.js'
  _buildTestsNodejs()
  run(b, test, tests)
})
.describe('Runs the test-suite in node-js.')

b.task('cover', ['lib'], () => {
  const coverage = require.resolve('substance-test/bin/coverage')
  const tests = './tmp/tests.cov.js'
  _buildTestsCov()
  run(b, coverage, tests)
})
.describe('Runs the test-suite in node-js.')

b.task('default', ['clean', 'lib'])

b.setServerPort(5551)
b.serve({ static: true, route: '/', folder: '.' })
