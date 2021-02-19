import { assertEquals } from './../test_deps.ts';
import { Person } from './classes/person.ts';
import { age } from './classes/age.ts';
import { name } from './classes/name.ts';


Deno.test('Type Wrapper - Person - It should be possible to create a person with a name', () => {
    const givenName = name('Tom');
    const givenAge = age(42);
    const givenPerson = new Person(givenName, givenAge);
    const expectedResult = 'Tom';
    const theName = givenPerson.name;
    const result = theName.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person - It should be possible to create a person with an age', () => {
    const givenName = name('Tom');
    const givenAge = age(42);
    const givenPerson = new Person(givenName, givenAge);
    const expectedResult = 42;
    const theAge = givenPerson.age;
    const result = theAge.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person - It should be possible to create a person from JSON', () => {
    const givenPerson = Person.fromJSON({
        name: 'Tom',
        age: 42
    });
    const expectedResult = 42;
    const theAge = givenPerson.age;
    const result = theAge.value;
    assertEquals(result, expectedResult);
})


Deno.test('Type Wrapper - Person - is young - A person with age 40 or younger should be considered young', () => {
    const givenPerson = Person.fromJSON({
        name: 'Ninni',
        age: 40
    });
    const expectedResult = true;
    const result = givenPerson.isYoung();
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person - is young - A person with age over 40 should be considered not young', () => {
    const givenPerson = Person.fromJSON({
        name: 'Tom',
        age: 42
    });
    const expectedResult = false;
    const result = givenPerson.isYoung();
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person - It should be possible to get a person in JSON', () => {
    const givenPerson = Person.fromJSON({
        name: 'Tom',
        age: 42
    });
    const expectedResult = {
        name: 'Tom',
        age: 42
    };
    const result = givenPerson.toJSON();
    assertEquals(result, expectedResult);
})

// Test print method
