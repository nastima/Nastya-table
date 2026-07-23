import {useEffect} from "react";
import {mockSocket} from "../services/websocket/mockSocket.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../store/store";
import {updateUser, addUser, removeUser} from "../store/users/usersSlice.ts";
import {addScorePoint} from "../store/scoreHistory/scoreHistorySlice.ts";
import {WebSocketEvent} from "../services/websocket/websocketTypes.ts";


export const useWebSocket = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        mockSocket.connect();

        const unsubscribe = mockSocket.subscribe((message) => {
            switch(message.type) {
                case WebSocketEvent.USER_UPDATED:
                    dispatch(updateUser(message.payload));
                    if(message.payload.changes.score !== undefined) {
                        dispatch(addScorePoint(message.payload.changes.score));
                    }
                    break;
                case WebSocketEvent.USER_CREATED:
                    dispatch(addUser(message.payload));
                    break;
                case WebSocketEvent.USER_DELETED:
                    dispatch(removeUser(message.payload.id));
                    break;
            }
        });

        return () => {
            unsubscribe();
            mockSocket.disconnect();
        };
    }, [dispatch]);
};