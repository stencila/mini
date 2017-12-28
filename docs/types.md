# Types

There are six fundamental types in Mini, There are four _atomic_ types, values that can not be broken into smaller parts: `boolean`, `number`, `integer`, and `string`. There are two _compound_ types, `array` and `object`, that consist of combinations of atomic types.

## Boolean

The simplest atomic type is `boolean` which can only have one of two values:

```mini
true
```

or

```mini
false
```

## Number

The `number` type represents [real numbers](https://en.wikipedia.org/wiki/Real_number) e.g.

```mini
3.14159265358979323846264338327950288419716
```

## Integer

The `integer` type represents [integers](https://en.wikipedia.org/wiki/Integer) e.g.

```mini
42
```

## String

Strings are sequences of characters. String literals can use either single or double quotation marks.

```mini
'hello world'
```

```mini
"hello world"
```

## Array

An array is a sequence of values e.g. 

```mini
[1, 2, 3]
```

The values in an array can have different types e.g.

```mini
['hello world', [1, 2], {}]
```

## Object

An object is a collection of values in which eack value has a _key_ e.g.

```mini
{a: 1, b: 2}
```
