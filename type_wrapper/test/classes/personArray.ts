import { ITypeWrapper } from "./../../src/ITypeWrapper.ts";
import { Person, IPerson } from './person.ts';

export class PersonArray implements ITypeWrapper {

    public readonly value: Person[];
    
    constructor(value: Person[] = []) {
        this.value = value;
        return this;
    }

    public add(person: Person) {
        this.value.push(person);
        return this;
    }

    public print() {
        this.value.forEach((person: Person) => {
            console.log('Name:', person.name, 'Age:', person.age);
        })    
    }

    public filterYoung() {
        const result = this.value.filter((person: Person) => {
            return person.isYoung();
        })
        return new PersonArray(result);
    }

    public toJSON() {
        const result: IPerson[] = [];
        this.value.forEach((person: Person) => {
            result.push(person.toJSON());
        })
        return result;
    }

    public static fromJSON(value: IPerson[]) {
        const persons = value.map((person: IPerson) => {
            return Person.fromJSON(person);
        })
        return new PersonArray(persons);
    }
}
