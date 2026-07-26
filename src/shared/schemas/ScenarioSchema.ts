import {z} from 'zod';

export const scenarioSchema = z.object({
    template: z.string(),

    city: z.string(),

    scoreDelta: z.number()
        .min(-50)
        .max(50),

    onlinePercent: z.number()
        .min(0)
        .max(100),

    ageDelta: z.number()
        .min(-10)
        .max(10),
});

export type ScenarioFormData = z.infer<typeof scenarioSchema>