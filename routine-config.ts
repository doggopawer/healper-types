import { User } from "./user";

export type RoutineConfig = {
    routineConfigId: string;
    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
} & Pick<User, "userId">;

export type GetRoutineConfigAllResponse = RoutineConfig[];
export type GetRoutineConfigOneResponse = RoutineConfig;
export type CreateRoutineConfigOneResponse = RoutineConfig;
export type UpdateRoutineConfigOneResponse = RoutineConfig;
export type DeleteRoutineConfigOneResponse = RoutineConfig;

export type GetRoutineConfigAllRequest = Pick<User, "userId">;
export type GetRoutineconfigOneRequest = Pick<
    RoutineConfig,
    "routineConfigId"
> &
    Pick<User, "userId">;
export type CreateRoutineConfigOneRequest = Pick<
    RoutineConfig,
    "name" | "color"
> &
    Pick<User, "userId">;
export type UpdateRoutineConfigOneRequest = RoutineConfig;
export type DeleteRoutineConfigOneRequest = Pick<
    RoutineConfig,
    "routineConfigId"
>;
