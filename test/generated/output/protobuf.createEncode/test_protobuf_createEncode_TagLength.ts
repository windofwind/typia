import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TagLength } from "../../../structures/TagLength";

export const test_protobuf_encode_TagLength = _test_protobuf_encode<TagLength>(
    TagLength,
)({
    encode: (input: TagLength): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "value";
                if (0 !== input.value.length) {
                    for (const elem of input.value) {
                        writer.uint32(10);
                        writer.fork();
                        $peo1(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo1 = (input: any): any => {
                // property "fixed";
                writer.uint32(10);
                writer.string(input.fixed);
                // property "minimum";
                writer.uint32(18);
                writer.string(input.minimum);
                // property "maximum";
                writer.uint32(26);
                writer.string(input.maximum);
                // property "minimum_and_maximum";
                writer.uint32(34);
                writer.string(input.minimum_and_maximum);
                // property "equal";
                writer.uint32(42);
                writer.string(input.equal);
            };
            const $io1 = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length &&
                "string" === typeof input.equal &&
                10 <= input.equal.length &&
                19 >= input.equal.length;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TagLength {\n    repeated TagLength.Type value = 1;\n    message Type {\n        required string fixed = 1;\n        required string minimum = 2;\n        required string maximum = 3;\n        required string minimum_and_maximum = 4;\n        required string equal = 5;\n    }\n}',
});