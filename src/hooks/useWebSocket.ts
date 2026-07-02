import {useEffect} from "react";
import {mockSocket} from "../services/websocket/mockSocket.ts";

export const useWebSocket = () => {
    useEffect(() => {
        mockSocket.connect();

        const unsubscribe = mockSocket.subscribe((message) => {
            console.log(message);
        });

        return () => {
            unsubscribe();
            mockSocket.disconnect();
        };
    }, []);
}