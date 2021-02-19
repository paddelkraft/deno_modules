import { assertEquals } from './../test_deps.ts';
import { Name, name } from './classes/name.ts'

Deno.test('Type Wrapper - Name - It should be possible to create a name', () => {
    const given = new Name('Tom');
    const expectedResult = 'Tom';
    const result = given.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Name - It should be possible to create a name using JSON', () => {
    const given = Name.fromJSON('Tom');
    const expectedResult = 'Tom';
    const result = given.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Name - It should be possible to create a name using factory function', () => {
    const given = name('Tom');
    const expectedResult = 'Tom';
    const result = given.value;
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Name - It should be possible to get the JSON value', () => {
    const given = name('Tom');
    const expectedResult = 'Tom';
    const result = given.toJSON();
    assertEquals(result, expectedResult);
})

// Test print method
