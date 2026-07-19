import type {User} from '../../store/api/types.ts'

export const WebSocketEvent = {
    USER_UPDATED: "USER_UPDATED",
    USER_CREATED: "USER_CREATED",
    USER_DELETED: "USER_DELETED",
} as const;

export type WebSocketMessage =
    | {
    type: typeof WebSocketEvent.USER_UPDATED;
    payload: {
        id: number;
        changes: Partial<User>;
    };
}
    | {
    type: typeof WebSocketEvent.USER_CREATED;
    payload: User;
}
    | {
    type: typeof WebSocketEvent.USER_DELETED;
    payload: {
        id: number;
    };
};