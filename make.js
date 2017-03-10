let b = require('substance-bundler')
let path = require('path')

const DIST = 'dist/'
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

function _buildExample() {
  b.js('examples/example.js', {
    target: {
      dest: DIST+'example.js',
      format: 'umd', moduleName: 'EXAMPLE'
    },
    external: {
      'substance': 'window.substance',
      'substance-mini': 'window.substanceMini'
    }
  })
}

function _buildTests() {
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

function _buildCov() {
  b.copy('./node_modules/substance-test/dist/*', TMP, { root: './node_modules/substance-test/dist' })
  b.js('./test/index.js', {
    target: {
      dest: TMP+'tests.js',
      format: 'umd', moduleName: 'tests'
    },
    alias: {
      'substance-mini': path.join(__dirname, 'index.js')
    },
    external: {
      'substance-test': 'substanceTest'
    },
    istanbul: {
      include: ['src/*.js']
    },
    buble: true,
    commonjs: true
  })
}

function _runTestBrowser() {
  b.custom('Running browser tests...', {
    execute: function() {
      let karma = require('karma')
      const browser = process.env.TRAVIS ? 'ChromeTravis': 'Chrome'
      return new Promise(function(resolve) {
        let fails = 0
        const server = new karma.Server({
          configFile: __dirname + '/karma.conf.js',
          browsers: [browser],
          singleRun: true,
          failOnEmptyTestSuite: false
        }, function() {
          // why is exitCode always == 1?
          if (fails > 0) {
            process.exit(1)
          } else {
            resolve()
          }
        })
        server.on('run_complete', function(browsers, results) {
          if (results && results.failed > 0) {
            fails += results.failed
          }
        })
        server.start()
      })
    }
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
  b.rm(TMP)
  b.rm(DIST)
})

b.task('parser', _generateParser)

b.task('lib', ['parser'], _buildLib)

b.task('example', ['lib'], _buildExample)

b.task('test', ['lib'], _buildTests)

b.task('cov', () => {
  _buildCov()
  _runTestBrowser()
})

b.task('default', ['clean', 'example'])

b.setServerPort(5551)
b.serve({ static: true, route: '/', folder: '.' })
