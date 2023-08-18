import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_isClone_ArrayRepeatedUnion =
    _test_misc_isClone<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
        typia.misc.createIsClone<ArrayRepeatedUnion>(),
    );