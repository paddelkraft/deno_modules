import { assertEquals } from './../test_deps.ts';
import { person, Person } from './classes/person.ts';
import { age } from './classes/age.ts';
import { name } from './classes/name.ts';
import { PersonArray } from './classes/personArray.ts';

function getPersons() {
    return [ 
        Person.fromJSON({
            name: 'Tom',
            age: 42
        }),
        Person.fromJSON({
            name: 'Ninni',
            age: 40
        }),
        Person.fromJSON({
            name: 'Amanda',
            age: 10
        })
    ]
}

function getPersonsAsJSON() {
    return [ 
        {
            name: 'Tom',
            age: 42
        },
        {
            name: 'Ninni',
            age: 40
        },
        {
            name: 'Amanda',
            age: 10
        }
    ]
}

function getYoungPersonsAsJSON() {
    return [ 
        {
            name: 'Ninni',
            age: 40
        },
        {
            name: 'Amanda',
            age: 10
        }
    ]
}

function getOldPerson() {
    return Person.fromJSON({
        name: 'Tom',
        age: 42
    })
}

function sortPersonArray(personArray: Person[]) {
    return personArray.sort((a: Person, b: Person) => {
        if (a.name.value < b.name.value) return -1;
        if (a.name.value > b.name.value) return 1;
        if (a.age < b.age) return -1;
        if (a.age > b.age) return 1;
        return 0;
    })
}

Deno.test('Type Wrapper - Person Array - It should be possible to create a person array from an array of persons', () => {
    const givenPersons = getPersons();
    const thePersonArray = new PersonArray(givenPersons);
    const result = thePersonArray.value;
    const expectedResult = getPersons();
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person Array - It should be possible to create a person array from JSON', () => {
    const givenPersons = getPersonsAsJSON();
    const thePersonArray = PersonArray.fromJSON(givenPersons);
    const result = thePersonArray.value;
    const expectedResult = getPersons();
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person Array - It should be possible to get a the person array in JSON format', () => {
    const givenPersons = getPersons();
    const thePersonArray = new PersonArray(givenPersons);
    const result = thePersonArray.toJSON();
    const expectedResult = getPersonsAsJSON();
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person Array - is young - it should be possibe to get a new person array with onle the young persons', () => {
    const givenPersons = getPersons();
    const thePersonArray = new PersonArray(givenPersons);
    const youngPersons = thePersonArray.filterYoung();
    const result = youngPersons.toJSON();
    const expectedResult = getYoungPersonsAsJSON();
    assertEquals(result, expectedResult);
})

Deno.test('Type Wrapper - Person Array - Add - it should be possibe to add a new person to a person array', () => {
    const givenPersons = getYoungPersonsAsJSON();
    const thePersonArray = PersonArray.fromJSON(givenPersons);
    const thePerson = getOldPerson();
    thePersonArray.add(thePerson);
    const result = sortPersonArray(thePersonArray.value);
    const expectedResult = sortPersonArray(getPersons());
    assertEquals(result, expectedResult);
})

// Test print method
