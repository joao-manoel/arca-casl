import { CreateAbility, MongoAbility } from "@casl/ability";
import { z } from "zod";
import type { User } from "./models/user";
declare const appAbilitiesSchema: z.ZodUnion<[z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">, z.ZodLiteral<"view">]>, z.ZodLiteral<"Family">], null>, z.ZodTuple<[z.ZodLiteral<"manage">, z.ZodLiteral<"all">], null>]>;
type AppAbilities = z.infer<typeof appAbilitiesSchema>;
export type AppAbility = MongoAbility<AppAbilities>;
export declare const createAppAbility: CreateAbility<AppAbility>;
export declare function defineAbilityFor(user: User): AppAbility;
export {};
