import { TypeWrapper } from './../../src/typeWrapper.ts';

export class Name extends TypeWrapper<string> {
    public static fromJSON(value: string) {
        return new Name(value);
    }
};

export function name(value: string) {
    return new Name(value);
}
