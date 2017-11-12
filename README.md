# Mini

A minimal, functional language available in [Stencila](https://stenci.la) Documents and Sheets.

## Reference

### Pipe operator

The pipe operator, `|`, allows for several functions to be combined in a "pipeline". It passes the expression on the left as the first argument of the function call on the right. So a set of nested function calls like:

```bash
sum(select(filter(data, 'row.age <= 40'), 'weight'))
```

can be written in a more readable pipeline as:

```bash
data | filter('row.age <= 40') | select('weight') | sum()
```

### Other operators

The other operators in Mini are simply shortcuts to writing function calls. For example, the forward slash operator `/` is a short cut for the `divide` function, so the expression `4/5`, is equivalent to the function call expression `divide(4, 5)`. 

This allows you to write shorter, more readable and comprehensible expressions. For example, instead of writing a nested set of calls like:

```
and(less(add(a, b), 10), equal(c, 1))
```

You can write:

```
a + b < 10 && c == 4
```

Operators have differing levels of precedence. Precedence determines the order in which operators are parsed with respect to each other. Operators with higher precedence become the operands of operators with lower precedence. Operator precedence in Mini is very similar to that in other languages.

The following table list the operators in Mini in order of decreasing precedence (in groups of equal precedence) along with their function call equivalents. See [`stencila/libcore`](https://github.com/stencila/libcore) for implementation and documentation for these functions.

Operator | Usage example     | Function call equivalent
:------: | :-----------      | :---------------------- 
`.`      | `value.member`    | `select(value, member)`
`[]`     | `value[member]`   | `select(value, member)`
|
`!`      | `!value`          | `not(value)`
`+`      | `+value`          | `positive(value)`
`-`      | `-value`          | `negative(value)`
|
`^`      | `value ^ expon`   | `pow(value, expon)`
|
`*`      | `value * other`   | `multiply(value, other)`
`/`      | `value / other`   | `divide(value, other)`
`%`      | `value % other`   | `remainder(value, other)`
|
`+`      | `value + other`   | `add(value, other)`
`-`      | `value - other`   | `subtract(value, other)`
|
`<`      | `value < other`   | `less(value, other)`
`<=`     | `value <= other`  | `less_or_equal(value, other)`
`>`      | `value > other`   | `greater(value, other)`
`>=`     | `value >= other`  | `greater_or_equal(value, other)`
|
`==`     | `value == other`  | `equal(value, other)`
`!=`     | `value != other`  | `not_equal(value, other)`
|
`&&`     | `value && other`  | `and(value, other)`
|      |
`||`     | `value || other`  | `or(value, other)`



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
