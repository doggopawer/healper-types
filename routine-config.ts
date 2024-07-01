import { User } from "./user";

export type RoutineConfig = {
    routineConfigId: string;
    routineConfigName: string;
    routineConfigColor: string;
    createdAt: Date;
    updatedAt: Date;
} & Pick<User, "userId">;
export type GetRoutineConfigAllResponse = RoutineConfig[];
export type GetRoutineConfigOneResponse = RoutineConfig;
export type CreateRoutineConfigOneResponse = RoutineConfig;
export type UpdateRoutineConfigOneResponse = RoutineConfig;
export type DeleteRoutineConfigOneResponse = RoutineConfig;

export type GetRoutineConfigAllHeader = Pick<User, "userId">;

export type GetRoutineConfigOneHeader = Pick<User, "userId">;
export type GetRoutineConfigOnePath = Pick<RoutineConfig, "routineConfigId">;
export type GetRoutineconfigOneRequest = GetRoutineConfigOneHeader &
    GetRoutineConfigOnePath;

export type CreateRoutineConfigOneHeader = Pick<User, "userId">;
export type CreateRoutineConfigOneBody = Pick<
    RoutineConfig,
    "routineConfigName" | "routineConfigColor"
>;
export type CreateRoutineConfigOneRequest = CreateRoutineConfigOneHeader &
    CreateRoutineConfigOneBody;

export type UpdateRoutineConfigOneBody = Pick<
    RoutineConfig,
    "routineConfigId" | "routineConfigName" | "routineConfigColor"
>;
export type UpdateRoutineConfigOneHeader = Pick<User, "userId">;
export type UpdateRoutineConfigOneRequest = UpdateRoutineConfigOneHeader &
    UpdateRoutineConfigOneBody;

export type DeleteRoutineConfigOnePath = Pick<RoutineConfig, "routineConfigId">;
export type DeleteRoutineConfigOneRequest = DeleteRoutineConfigOnePath;
