# Mini

A minimal, functional language focused on data analysis and visualization and available in [Stencila](https://stenci.la) documents.

[![NPM](http://img.shields.io/npm/v/stencila-mini.svg?style=flat)](https://www.npmjs.com/package/stencila-mini)
[![Build status](https://travis-ci.org/stencila/mini.svg?branch=master)](https://travis-ci.org/stencila/mini)
[![Code coverage](https://codecov.io/gh/stencila/mini/branch/master/graph/badge.svg)](https://codecov.io/gh/stencila/mini)

## Documentation

See the documentation at https://stencila.github.io/mini.

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
