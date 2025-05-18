import { z } from "zod";
export declare const userSchema: z.ZodObject<{
    __typename: z.ZodDefault<z.ZodLiteral<"User">>;
    id: z.ZodString;
    role: z.ZodEnum<["ADMIN", "USER"]>;
}, "strip", z.ZodTypeAny, {
    __typename: "User";
    id: string;
    role: "ADMIN" | "USER";
}, {
    id: string;
    role: "ADMIN" | "USER";
    __typename?: "User" | undefined;
}>;
export type User = z.infer<typeof userSchema>;
