###### This is just a bunch of notes, I'll format it later and re-write it.

# Generics
### Abstract
Variables allow us to work with data without explicitly knowing its value;
generics allow us to work with data without explicitly knowing its _type_.

For example, in Java, we can work with a `String` paramter like so:

```java
    /** Prints the argument. */
    public void printArgument(String s) {
        System.out.println(s);
    }
    String msg = "Hello world";
```

The method can be invoked using `printArgument("Hello world")`, which prints
`"Hello world"` to the console. If we wanted to manipulate the string from
within the method, it's easy; we can just do `s.substring()` or whatever.

But a **generic variable** is one whose type we do not explicitly know. For
example:

```java
    public <T> void printArgument(T arg) {
        System.out.println(arg);
    }
```

In the above code, we do not explicitly know what type `arg` is; it could be
a `String`, a `boolean`, or it could even be some unknown user-defined object
type! By making the method take a generic argument, we can pass it anything:

    printArgument("Hello world"); // -> "Hello world"
    printArgument(true) // -> "true"
    printArguent(null) // -> "null"

This means we cannot do `arg.substring()`, because `arg` may be of a type that
does not have a `substring()` method. In fact, we can't invoke *any* methods
on `arg` because it may be of a type that doesn't have *any* methods!
