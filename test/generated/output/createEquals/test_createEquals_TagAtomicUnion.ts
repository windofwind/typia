import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_equals_TagAtomicUnion = _test_equals<TagAtomicUnion>(
    TagAtomicUnion,
)((input: any, _exceptionable: boolean = true): input is TagAtomicUnion => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
            (elem: any, _index1: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        (("string" === typeof input.value &&
            3 <= input.value.length &&
            7 >= input.value.length) ||
            ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value)) &&
        (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    return "object" === typeof input && null !== input && $io0(input, true);
});