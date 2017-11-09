# Mini

A minimal, functional language available in [Stencila](https://stenci.la) Documents and Sheets.

# Development

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

5. Build

```bash
node make
```