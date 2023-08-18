import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_equals_FunctionalProperty = _test_equals<FunctionalProperty>(
    FunctionalProperty,
)((input) => typia.equals<FunctionalProperty>(input));