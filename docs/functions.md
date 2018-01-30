# Functions

## Defining functions

Currently, functions can not be written using Mini itself. Instead, functions are written in an external language such as Javascript, Python or R. [`libcore`](https://stencila.github.io/libcore) is a library of core functions.

## Calling functions

Functions are called using parentheses containing arguments: e.g

```mini
add(1, 2)
```

Named arguments can be used, but only after unnamed arguments. e.g.

```mini
add(1, other=2)
```