import { TypeWrapper } from './../../src/typeWrapper.ts';

export class Age extends TypeWrapper<number> {
    public static fromJSON(value: number) {
        return new Age(value);
    }
};

export function age(value: number) {
    return new Age(value);
}
