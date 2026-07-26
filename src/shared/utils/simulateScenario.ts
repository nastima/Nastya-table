import type {ScenarioFormData} from "../schemas/ScenarioSchema.ts";
import type {User} from "../../store/api/types.ts";

export const simulateScenario = (users: User[], params: ScenarioFormData): User[] => {
    return users.map((user) => ({
        ...user,
        score: Math.max(0, user.score + params.scoreDelta),
        age: Math.max(0, user.age + params.ageDelta),
    }))
}