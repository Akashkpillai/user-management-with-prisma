import { SetMetadata } from "@nestjs/common"

export const ROLE_KEYS = 'role'
export const Roles = (role:string[]) => SetMetadata(ROLE_KEYS,role)