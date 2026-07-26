import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type {ControllerRenderProps} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {scenarioSchema,} from "../shared/schemas/ScenarioSchema.ts";
import type {ScenarioFormData} from "../shared/schemas/ScenarioSchema.ts";
import {useGetDraftQuery, useSaveDraftMutation,} from '../store/api/scenarioApi.ts';

export const useScenarioForm = () => {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ScenarioFormData>({
        resolver: zodResolver(scenarioSchema),

        defaultValues: {
            template: "activity",
            scoreDelta: 0,
            onlinePercent: 50,
            ageDelta: 0,
        },
    });

    const { data: draft } = useGetDraftQuery();
    const [saveDraft] = useSaveDraftMutation();

    useEffect(() => {
        if (draft) {
            reset(draft);
        }
    }, [draft, reset]);

    const handleFieldChange = <
        K extends keyof ScenarioFormData
    >(
        field: ControllerRenderProps<ScenarioFormData, K>,
        value: ScenarioFormData[K]
    ) => {
        field.onChange(value);

        saveDraft({
            [field.name]: value,
        });
    };

    return {
        control,
        errors,
        handleSubmit,
        handleFieldChange,
    };
};