# Operators

## Pipe operator

The pipe operator, `|`, allows for several function calls to be combined in a "pipeline". It passes the expression on the left as the first argument of the function call on the right. So a set of nested function calls like:

```mini
sum(select(filter(data, 'row.age <= 40'), 'weight'))
```

can be written in a more readable pipeline as:

```mini
data | filter('row.age <= 40') | select('weight') | sum()
```

## Other operators

The other operators in Mini are simply shortcuts to writing function calls. For example, the forward slash operator `/` is a short cut for the `divide` function, so the expression `4/5`, is equivalent to the function call expression `divide(4, 5)`. 

This allows you to write shorter, more readable and comprehensible expressions. For example, instead of writing a nested set of calls like:

```mini
and(less(add(a, b), 10), equal(c, 1))
```

You can write:

```mini
a + b < 10 && c == 4
```

Operators have differing levels of precedence. Precedence determines the order in which operators are parsed with respect to each other. Operators with higher precedence become the operands of operators with lower precedence. Operator precedence in Mini is very similar to that in other languages.

The following table list the operators in Mini in order of decreasing precedence (in groups of equal precedence) along with their function call equivalents. See [`stencila/libcore`](https://github.com/stencila/libcore) for implementation and documentation for these functions.

Precedence | Operator | Usage example     | Function call equivalent
:--------- | :------: | :-----------      | :---------------------- 
1          | `.`      | `value.member`    | `select(value, member)`
1          | `[]`     | `value[member]`   | `select(value, member)`
2          | `!`      | `!value`          | `not(value)`
2          | `+`      | `+value`          | `positive(value)`
2          | `-`      | `-value`          | `negative(value)`
3          | `^`      | `value ^ expon`   | `pow(value, expon)`
4          | `*`      | `value * other`   | `multiply(value, other)`
4          | `/`      | `value / other`   | `divide(value, other)`
4          | `%`      | `value % other`   | `remainder(value, other)`
5          | `+`      | `value + other`   | `add(value, other)`
5          | `-`      | `value - other`   | `subtract(value, other)`
6          | `<`      | `value < other`   | `less(value, other)`
6          | `<=`     | `value <= other`  | `less_or_equal(value, other)`
6          | `>`      | `value > other`   | `greater(value, other)`
6          | `>=`     | `value >= other`  | `greater_or_equal(value, other)`
7          | `==`     | `value == other`  | `equal(value, other)`
7          | `!=`     | `value != other`  | `not_equal(value, other)`
8          | `&&`     | `value && other`  | `and(value, other)`
9          | &#124;&#124; | `value `&#124;&#124;` other`  | `or(value, other)`
