"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppAbility = void 0;
exports.defineAbilityFor = defineAbilityFor;
const ability_1 = require("@casl/ability");
const zod_1 = require("zod");
const family_1 = require("./subjects/family");
const permissions_1 = require("./permissions");
const appAbilitiesSchema = zod_1.z.union([
    family_1.familySubject,
    zod_1.z.tuple([zod_1.z.literal("manage"), zod_1.z.literal("all")]),
]);
exports.createAppAbility = ability_1.createMongoAbility;
function defineAbilityFor(user) {
    const builder = new ability_1.AbilityBuilder(exports.createAppAbility);
    if (typeof permissions_1.permissions[user.role] !== "function") {
        throw new Error(`Permissions for role ${user.role} not found.`);
    }
    permissions_1.permissions[user.role](user, builder);
    const ability = builder.build({
        detectSubjectType(subject) {
            return subject.__typename;
        },
    });
    return ability;
}
