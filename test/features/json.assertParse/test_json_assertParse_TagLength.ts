import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TagLength } from "../../structures/TagLength";

export const test_json_assertParse_TagLength =
    _test_json_assertParse<TagLength>(TagLength)((input) =>
        typia.json.assertParse<TagLength>(input),
    );