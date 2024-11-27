export interface ErrorDefinition {
    code: string;
    message: string;
    status: number; // HTTP 상태 코드 추가
}

export const ErrorDefinitions: Record<string, ErrorDefinition> = {
    NOT_FOUND: {
        code: "NOT_FOUND",
        message: "요청한 리소스를 찾을 수 없습니다.",
        status: 404,
    },
    INVALID_DATA: {
        code: "INVALID_DATA",
        message: "데이터가 유효하지 않습니다.",
        status: 400,
    },
    UNAUTHORIZED: {
        code: "UNAUTHORIZED",
        message: "사용자가 권한이 없습니다.",
        status: 403,
    },
    ALREADY_EXISTS: {
        code: "ALREADY_EXISTS",
        message: "이미 존재하는 리소스입니다.",
        status: 409,
    },
    NETWORK_ERROR: {
        code: "NETWORK_ERROR",
        message: "네트워크 연결에 문제가 발생했습니다.",
        status: 500, // 일반적인 서버 오류
    },
    FETCH_FAILED: {
        code: "FETCH_FAILED",
        message: "리소스를 불러오는 데 실패했습니다.",
        status: 500, // 서버 오류
    },
    DELETE_FAILED: {
        code: "DELETE_FAILED",
        message: "리소스 삭제에 실패했습니다.",
        status: 500, // 서버 오류
    },
    UPDATE_FAILED: {
        code: "UPDATE_FAILED",
        message: "리소스 업데이트에 실패했습니다.",
        status: 500, // 서버 오류
    },
    SESSION_EXPIRED: {
        code: "SESSION_EXPIRED",
        message: "세션이 만료되었습니다. 다시 로그인 해주세요.",
        status: 401,
    },
};

export class CustomError extends Error {
    public code: string;
    public status: number; // HTTP 상태 코드 추가
    public timestamp: Date;

    constructor(errorKey: keyof typeof ErrorDefinitions) {
        const errorDefinition: ErrorDefinition = ErrorDefinitions[errorKey] || {
            code: "UNKNOWN_ERROR",
            message: "알 수 없는 오류가 발생했습니다.",
            status: 500, // 기본 상태 코드
        };

        super(errorDefinition.message);
        this.name = this.constructor.name; // 에러 클래스 이름
        this.code = errorDefinition.code; // 에러 코드
        this.status = errorDefinition.status; // 에러 상태 코드
        this.timestamp = new Date(); // 에러 발생 시간
    }
}
