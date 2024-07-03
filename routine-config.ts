import { User } from "./user";

export type RoutineConfig = {
    id: number;
    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
};

export type GetRoutineConfigAllResponse = RoutineConfig[];
export type GetRoutineConfigOneResponse = RoutineConfig;
export type CreateRoutineConfigOneResponse = RoutineConfig;
export type UpdateRoutineConfigOneResponse = RoutineConfig;
export type DeleteRoutineConfigOneResponse = RoutineConfig;

export type GetRoutineConfigAllRequest = Pick<RoutineConfig, "userId">;
export type GetRoutineconfigOneRequest = Pick<RoutineConfig, "id"> &
    Pick<RoutineConfig, "userId">;
export type CreateRoutineConfigOneRequest = Pick<
    RoutineConfig,
    "name" | "color"
> &
    Pick<RoutineConfig, "userId">;
export type UpdateRoutineConfigOneRequest = RoutineConfig;
export type DeleteRoutineConfigOneRequest = Pick<RoutineConfig, "id">;
