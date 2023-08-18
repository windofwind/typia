import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_misc_clone_DynamicArray = _test_misc_clone<DynamicArray>(
    DynamicArray,
)(typia.misc.createClone<DynamicArray>());