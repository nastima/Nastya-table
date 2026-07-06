import type { WebSocketMessage } from "./websocketTypes";
import type { User } from "../../store/api/types";

const firstNames = [
    "Alex",
    "John",
    "Kate",
    "Emma",
    "Mike",
    "Olivia",
];

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

            const user: User = {
                id: randomId,
                firstName:
                    firstNames[Math.floor(Math.random() * firstNames.length)],
                lastName: "Updated",
                email: `user${randomId}@mail.com`,
                age: 25,
                phone: "+123456789",
                image: "",
                company: {
                    name: "OpenAI",
                },
                address: {
                    city: "Berlin",
                },
                registeredAt: "2026-07-06T12:00:00Z"
            };

            const message: WebSocketMessage = {
                type: "USER_UPDATED",
                payload: user,
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