

A minimal, functional language focused on data analysis and visualization and available in [Stencila](https://stenci.la) documents.

[![NPM](http://img.shields.io/npm/v/stencila-mini.svg?style=flat)](https://www.npmjs.com/package/stencila-mini)
[![Build status](https://travis-ci.org/stencila/mini.svg?branch=master)](https://travis-ci.org/stencila/mini)
[![Code coverage](https://codecov.io/gh/stencila/mini/branch/master/graph/badge.svg)](https://codecov.io/gh/stencila/mini)

## Documentation

The pipe operator, `|`, allows for several functions to be combined in a "pipeline". It passes the expression on the left as the first argument of the function call on the right. So a set of nested function calls like:

## Development

1. Clone the repo

```bash
git clone https://github.com/stencila/mini.git
```

2. Install a Java Runtime or Java Development Kit (`JDK`) if you don't have one already.

3. Download [ANTLR](http://www.antlr.org/download/antlr-4.6-complete.jar) into the local `.bin/` folder:

```bash
mkdir -p .bin
curl -o .bin/antlr-4.6-complete.jar http://www.antlr.org/download/antlr-4.6-complete.jar
```

4. Install dependencies

```bash
npm install
```

5. Test

```bash
npm test
```

or use `node make test:browser -w` and open `test/index.html` in your browser.  

6. Build

```bash
node make
```


A minimal, functional language focused on data analysis and visualization and available in [Stencila](https://stenci.la) documents.

[![NPM](http://img.shields.io/npm/v/stencila-mini.svg?style=flat)](https://www.npmjs.com/package/stencila-mini)
[![Build status](https://travis-ci.org/stencila/mini.svg?branch=master)](https://travis-ci.org/stencila/mini)
[![Code coverage](https://codecov.io/gh/stencila/mini/branch/master/graph/badge.svg)](https://codecov.io/gh/stencila/mini)

## Documentation

The pipe operator, `|`, allows for several functions to be combined in a "pipeline". It passes the expression on the left as the first argument of the function call on the right. So a set of nested function calls like:
See the documentation at https://github.com/stencila/stencila/docs/mini.

## Development

1. Clone the repo

```bash
git clone https://github.com/stencila/mini.git
```

2. Install a Java Runtime or Java Development Kit (`JDK`) if you don't have one already.

3. Download [ANTLR](http://www.antlr.org/download/antlr-4.6-complete.jar) into the local `.bin/` folder:

```bash
mkdir -p .bin
curl -o .bin/antlr-4.6-complete.jar http://www.antlr.org/download/antlr-4.6-complete.jar
```

4. Install dependencies

```bash
npm install
```

5. Test

```bash
npm test
```

or use `node make test:browser -w` and open `test/index.html` in your browser.  

6. Build

```bash
node make
```
