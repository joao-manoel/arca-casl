import { z } from "zod";

export const familySubject = z.tuple([
  z.union([
    z.literal("manage"),
    z.literal("create"),
    z.literal("update"),
    z.literal("delete"),
    z.literal("view"),
  ]),
  z.literal("Family"),
]);

export type FamilySubject = z.infer<typeof familySubject>;
