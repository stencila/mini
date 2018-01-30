# Variables

Variables are be defined using the equal `=` sign, 

```mini
x = 42
```

Variables can only be defined once. For example, if the following cell was in the same document as the one above, it would cause an error:

```mini
x = 'foo'
```

Within Stencila Sheets there are implicit variables for each cell. For example, to refer to the value in the top left cell of a Sheet use the variable,

```mini
A1
```

Cell ranges can also be referred to e.g. 

```mini
A1:A10
```
