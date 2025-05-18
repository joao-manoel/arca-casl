import { z } from "zod";
export declare const roleSchema: z.ZodEnum<["ADMIN", "USER"]>;
export type Role = z.infer<typeof roleSchema>;
