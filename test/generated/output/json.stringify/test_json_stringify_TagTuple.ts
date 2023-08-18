import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagTuple } from "../../../structures/TagTuple";

export const test_json_stringify_TagTuple = _test_json_stringify<TagTuple>(
    TagTuple,
)((input) =>
    ((input: TagTuple): string => {
        const $string = (typia.json.stringify as any).string;
        const $number = (typia.json.stringify as any).number;
        const $so0 = (input: any): any =>
            `{"tuple":${`[${$string(input.tuple[0])},${$number(
                input.tuple[1],
            )},${`[${input.tuple[2]
                .map((elem: any) => $string(elem))
                .join(",")}]`},${`[${input.tuple[3]
                .map((elem: any) => $number(elem))
                .join(",")}]`}]`}}`;
        return $so0(input);
    })(input),
);