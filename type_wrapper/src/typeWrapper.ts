import { ITypeWrapper } from "./ITypeWrapper.ts";

export abstract class TypeWrapper<T> implements ITypeWrapper {

    public value: T;

    constructor(value: T) {
        this.value = value;
        return this;
    };

    public toJSON() {
        return JSON.parse(JSON.stringify(this.value));
    }

    public print() {
        console.log(this.value);
    }
}
