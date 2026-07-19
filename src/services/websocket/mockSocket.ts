import type { WebSocketMessage } from "./websocketTypes";

export class MockSocket {
    private interval: number | null = null;

    private listeners: Array<(message: WebSocketMessage) => void> = [];

    connect() {
        if (this.interval !== null) {
            return;
        }

        console.log("🟢 Mock socket connected");

        this.interval = window.setInterval(() => {
            const randomId = Math.floor(Math.random() * 30) + 1;

            const isOldMessage = Math.random() > 0.5;

            const updatedAt = isOldMessage
                ? Date.now() - 100000
                : Date.now() + 1000;

            const message: WebSocketMessage = {
                type: "USER_UPDATED",

                payload: {
                    id: randomId,
                    changes: {
                        status: Math.random() > 0.5
                            ? 'online'
                            : 'offline',
                        score: Math.floor(Math.random() * 100),

                        updatedAt,
                    }
                },
            };

            this.listeners.forEach((listener) => listener(message));
        }, 3000);
    }

    subscribe(callback: (message: WebSocketMessage) => void) {
        this.listeners.push(callback);

        return () => {
            this.listeners = this.listeners.filter(
                (listener) => listener !== callback
            );
        };
    }

    disconnect() {
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }

        this.listeners = [];

        console.log("🔴 Mock socket disconnected");
    }
}

export const mockSocket = new MockSocket();