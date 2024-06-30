import { User } from "./user";

export type RoutineConfig = {
    routineConfigId: string;
    routineConfigName: string;
    routineConfigColor: string;
    createdAt: Date;
    updatedAt: Date;
} & Pick<User, "userId">;
export type GetRoutineConfigAllRequest = Pick<User, "userId">;
export type GetRoutineConfigAllResponse = RoutineConfig[];
export type GetRoutineConfigOneRequest = Pick<User, "userId"> &
    Pick<RoutineConfig, "routineConfigId">;
export type GetRoutineConfigOneResponse = RoutineConfig;
export type CreateRoutineConfigOneRequest = Pick<
    RoutineConfig,
    "routineConfigName" | "routineConfigColor"
> &
    Pick<User, "userId">;
export type CreateRoutineConfigOneResponse = RoutineConfig;
export type UpdateRoutineConfigOneRequest = Pick<
    RoutineConfig,
    "routineConfigId" | "routineConfigName" | "routineConfigColor"
> &
    Pick<User, "userId">;
export type UpdateRoutineConfigOneResponse = RoutineConfig;
export type DeleteRoutineConfigOneRequest = Pick<
    RoutineConfig,
    "routineConfigId"
>;
export type DeleteRoutineConfigOneResponse = RoutineConfig;
