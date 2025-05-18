"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
const role_1 = require("../role");
exports.userSchema = zod_1.z.object({
    __typename: zod_1.z.literal("User").default("User"),
    id: zod_1.z.string(),
    role: role_1.roleSchema,
});
