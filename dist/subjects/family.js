"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.familySubject = void 0;
const zod_1 = require("zod");
exports.familySubject = zod_1.z.tuple([
    zod_1.z.union([
        zod_1.z.literal("manage"),
        zod_1.z.literal("create"),
        zod_1.z.literal("update"),
        zod_1.z.literal("delete"),
        zod_1.z.literal("view"),
    ]),
    zod_1.z.literal("Family"),
]);
