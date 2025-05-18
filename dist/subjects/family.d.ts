import { z } from "zod";
export declare const familySubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">, z.ZodLiteral<"view">]>, z.ZodLiteral<"Family">], null>;
export type FamilySubject = z.infer<typeof familySubject>;
