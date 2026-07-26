import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";
import type {ScenarioDraft} from "./scenarioTypes.ts";
import type {User} from "./types.ts";
import type {ScenarioFormData} from "../../shared/schemas/ScenarioSchema.ts";
import {simulateScenario} from "../../shared/utils/simulateScenario.ts";

type SimulateScenarioRequest = {
    users: User[];
    params: ScenarioFormData;
};

let draft: ScenarioDraft = {
    template: 'activity',
    scoreDelta: 0,
    onlinePercent: 50,
    ageDelta: 0,
};

export const scenarioApi = createApi({
    reducerPath: 'scenarioApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['ScenarioDraft'],
    endpoints: (builder) => ({
        getDraft: builder.query<ScenarioDraft, void>({
            queryFn: async () => ({
                data: draft,
            }),

            providesTags: ['ScenarioDraft'],
        }),

        saveDraft: builder.mutation<void, Partial<ScenarioDraft>>({
            queryFn: async (changes) => {
                draft = {
                    ...draft,
                    ...changes,
                };

                return {
                    data: undefined,
                };
            },

            invalidatesTags: ['ScenarioDraft'],
        }),

        simulateScenario: builder.mutation<User[], SimulateScenarioRequest>({
            queryFn: async ({ users, params }) => {
                await new Promise(resolve => setTimeout(resolve, 1000));

                return {
                    data: simulateScenario(users, params),
                };
            },
        }),
    }),
});

export const {
    useGetDraftQuery,
    useSaveDraftMutation,
    useSimulateScenarioMutation,
} = scenarioApi;