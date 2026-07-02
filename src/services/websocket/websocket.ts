import type {WebSocketMessage} from "./websocketTypes.ts";

class WebSocketService {
    private socket: WebSocket | null = null;
    private listeners: ((data: WebSocketMessage) => void)[] = [];

    connect(url: string) {
        if (this.socket?.readyState === WebSocket.OPEN) {
            return;
        }

        this.socket = new WebSocket(url);
        this.socket.onopen = () => {
            console.log("WebSocket Connected");
        };
        this.socket.onmessage = (event: MessageEvent<string>) => {
            const message = JSON.parse(event.data) as WebSocketMessage;
            this.listeners.forEach((listener) =>listener(message));
        };
        this.socket.onerror = (event) => {
            console.log("WebSocket Error", event);
        }
        this.socket.onclose = () => {
            console.log("WebSocket Closed");
        };
    }

    disconnect() {
        this.socket?.close();
        this.socket = null;
        this.listeners = [];
    }

    subscribe(callback: (data: WebSocketMessage) => void) {
        this.listeners.push(callback);

        return () => {
            this.listeners = this.listeners.filter((listener) => listener !== callback);
        };
    }

    send(message: WebSocketMessage) {
        if(this.socket?.readyState !== WebSocket.OPEN) {
            console.warn("WebSocket is not connected");
            return;
        }
        this.socket?.send(JSON.stringify(message));
    }
}

export const wsService = new WebSocketService();