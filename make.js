const b = require('substance-bundler')
const path = require('path')
const fs = require('fs')

const DIST = 'dist/'
const TMP = 'tmp/'

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

b.task('default', ['clean', 'lib'])

// HELPERS

function _bundleANTLR4 () {
  b.browserify('../antlr4/runtime/JavaScript/src/antlr4/index', {
    dest: './vendor/antlr4.js',
    exports: ['default'],
    debug: false
  })
}

function _generateParser () {
  // we can not build the parser without ANTLR4
  // still we don't fail so that travis is working (generated parser is checked in)
  if (!fs.existsSync('./.bin/antlr-4.6-complete.jar')) {
    if (process.env.TRAVIS) {
      // don't throw on travis
      return
    } else {
      throw new Error('You need to download the antlr4 runtime.')
    }
  }
  b.custom('Generating parser', {
    src: './parser/Mini.g4',
    dest: './tmp/MiniParser.js',
    execute: () => {
      const isWin = /^win/.test(process.platform)
      let cmd = 'java -jar ./.bin/antlr-4.6-complete.jar -Dlanguage=JavaScript -no-visitor'
      // WORKAROUND: antrl4 behaves differently under windows, i.e. it does not generate into folder 'parser'
      // thus we need to tell explicitely to do so
      if (isWin) cmd += ' -o tmp/parser'
      else cmd += ' -o tmp'
      cmd += ' parser/Mini.g4'
      let exec = require('child_process').exec
      return new Promise(function (resolve, reject) {
        exec(cmd, (err) => {
          if (err) {
            reject(new Error(err))
          } else {
            resolve()
          }
        })
      })
    }
  })
  // NOTE: current versions commonjs and alias plugins
  // are incompatible
  // so we first bundle everything to es6 without the alias
  // amd in a second step replacing the alias
  b.js('./parser/parser.in.js', {
    output: [{
      file: './tmp/parser.js',
      format: 'es',
      sourcemap: false
    }],
    external: ['antlr4/index'],
    commonjs: {
      include: ['tmp/parser/**']
    },
    cleanup: true
  })
  b.js('./tmp/parser.js', {
    output: [{
      file: './parser/parser.js',
      format: 'es',
      sourcemap: false
    }],
    alias: {
      'antlr4/index': path.join(__dirname, '/vendor/antlr4.js')
    }
  })
}

// NOTE: this is needed when working on versions from github
function _buildDeps () {
  const subsDist = path.join(__dirname, 'node_modules/substance/dist')
  if (!fs.existsSync(path.join(subsDist, 'substance.js')) ||
      !fs.existsSync(path.join(subsDist, 'substance.cjs.js'))) {
    b.make('substance')
  }
}

function _buildLib () {
  _buildDeps()

  b.js('index.js', {
    output: [{
      file: DIST + 'stencila-mini.cjs.js',
      format: 'cjs'
    }, {
      file: DIST + 'stencila-mini.js',
      format: 'umd',
      name: 'stencilaMini',
      globals: {
        'substance': 'substance'
      }
    }],
    external: ['substance']
  })
}

function _buildTestsBrowser () {
  b.js('./test/index.js', {
    output: [{
      file: TMP + 'tests.js',
      format: 'umd',
      name: 'tests',
      globals: {
        'substance': 'window.substance',
        'stencila-mini': 'window.stencilaMini',
        'substance-test': 'window.substanceTest'
      }
    }],
    external: ['substance', 'stencila-mini', 'substance-test']
  })
}
