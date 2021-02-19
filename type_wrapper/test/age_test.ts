import { assertEquals } from './../test_deps.ts';
import { Age, age } from './classes/age.ts';

Deno.test('Type Wrapper - Age - It should be possible to create an age', () => {
    const given = new Age(42);
    const expectedResult = 42;
    const result = given.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Age - It should be possible to create an age using factory function', () => {
    const given = age(42);
    const expectedResult = 42;
    const result = given.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Age - It should be possible to create an age using JSON', () => {
    const given = Age.fromJSON(42);
    const expectedResult = 42;
    const result = given.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Age - It should be possible to get the JSON value', () => {
    const given = age(42);
    const expectedResult = 42;
    const result = given.toJSON();
    assertEquals(result, expectedResult);
})

// Test print method
