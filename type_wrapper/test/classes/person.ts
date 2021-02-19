import { ITypeWrapper } from "./../../src/ITypeWrapper.ts";
import { 
    Age,
    age
} from './age.ts';
import { 
    Name,
    name
} from './name.ts';

export interface IPerson {
    name: string,
    age: number
} 
export class Person implements ITypeWrapper {

    constructor(
        public name: Name,
        public age: Age
    ) {
        this.name = name;
        this.age = age;
        return this;
    }

    public isYoung() {
        return this.age.value <= 40;
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

export function person(value: IPerson) {
    return Person.fromJSON(value);
}
