# Type Wrapper

Link to module: [Type Wrapper](https://raw.githubusercontent.com/tommardh/deno_modules/master/type_wrapper/mod.ts)

This module is used to wrap primitive types like string, number and boolean as well as composed types and typed arrays in order to provide cleaner code.

This is a simple implementation and pattern to use in your own Deno projects.

The inspiration to this comes from [Object Calisthenics](https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf) and a npm module called [tiny-types](https://www.npmjs.com/package/tiny-types).

## Documentation

### ITypeWrapper Interface

All classes needs to implement at least theese methods to be consistent.

> `public toJSON(): JSON`
>
> `public print()`

It is also recommended to implement a static method to be able to create an object from a JSON input:

> `public static fromJSON(value: JSON): <Wrapper Class>`

For primitive datatype the function look a little different:

> `public static fromJSON(value: T): TypeWrapper<T>`

Examples will be provaded in the usafge section

### TypeWrapper class

The TypeWrapper class

- exposes the wrapped primitive value as a read only property
- implements a constructor: `constructor (value: T): TypeWrapper<t>`

## Usage

Look inte the test folder to find more detailed and working examples of usage.

### Example of primitive type

The example below creates a Type Wrapper for the string primitive representing the name. That is all that is needed.

```typescript
import { TypeWrapper } from 'https://raw.githubusercontent.com/tommardh/deno_modules/master/type_wrapper/mod.ts';

class Name extends TypeWrapper<string> {};
```

In order to use the created class Name, use the pattern in the example provided below:

```typescript
function helloWorld(theName: Name) {
    // Stina, hello world!
    console.log(`${theName.value}, hello world!`);
}

helloWorld(new Name('Stina'));
```

To get the calling signature to be a bit neater, I recommend to create the following factory method:

```typescript
function name(value: string) {
    return new Name(value);
}
```

Then tha call can be made as

```typescript
helloWorld(name(Stina));
```
For completeness reasons I recommend to also provide a static method called fromJSON that opens up this way of creating a Name object.

```typescript
class Name extends TypeWrapper<string> {
    public static fromJSON(value: string) {
        return new Name(value);
    }
};
```

### Example of a complex type

Continue this example by adding to the same file.
```typescript
import { ITypeWrapper } from 'https://raw.githubusercontent.com/tommardh/deno_modules/master/type_wrapper/mod.ts';

// Assume here were a declaration of age similar to the implementation of name

interface IPerson {
    name: string,
    age: number
} 

class Person implements ITypeWrapper {

    constructor(
        public name: Name,
        public age: Age
    ) {
        this.name = name;
        this.age = age;
        return this;
    }

    public static fromJSON(value: IPerson) {
        return new Person(name(value.name), age(value.age));
    }

    public toJSON() {
        return {
            name: this.name.toJSON(),
            age: this.age.toJSON()
        }
    }

    public print() {
        this.name.print();
        this.age.print();
    }
}
```

I have found it very useful to provide the Person factory function as well.

```typescript
function person(value: IPerson) {
    return Person.fromJSON(value);
}
```

## References

- [Object Calisthenics by Jeff Bay](https://www.cs.helsinki.fi/u/luontola/tdd-2009/ext/ObjectCalisthenics.pdf) 
- [Object Calisthenics](https://javflores.github.io/object-calisthenics/)
- [Object Calisthenics Origin](https://books.google.se/books?id=o4FXLgAACAAJ&dq=%22object+calisthenics%22&hl=en&sa=X&ved=2ahUKEwiBmP38i_buAhXNFXcKHb_IDmAQ6AEwBnoECAcQAg)
(Article by Jeff Bay published in the book The ThoughtWorks Anthology)
- [tiny-types](https://www.npmjs.com/package/tiny-types) (NPM Module by Jan Molak9
- [My Deno Modules Read Me File](https://github.com/tommardh/deno_modules)