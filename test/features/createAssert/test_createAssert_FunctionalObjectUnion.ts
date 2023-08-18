import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assert_FunctionalObjectUnion =
    _test_assert<FunctionalObjectUnion>(FunctionalObjectUnion)(
        typia.createAssert<FunctionalObjectUnion>(),
    );