import { AbilityBuilder } from "@casl/ability";
import type { AppAbility } from ".";
import type { Role } from "./role";
import type { User } from "./models/user";
type PermissionsByRole = (user: User, builder: AbilityBuilder<AppAbility>) => void;
export declare const permissions: Record<Role, PermissionsByRole>;
export {};
