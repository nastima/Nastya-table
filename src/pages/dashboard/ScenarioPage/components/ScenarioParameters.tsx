import {Paper, Typography, Select, MenuItem, Button, FormControl} from "@mui/material";
import {Controller} from "react-hook-form";
import {useScenarioForm} from '../../../../hooks/useScenarioForm.tsx'
import {ScenarioSlider} from "./ScenarioSlider.tsx";
import type {ScenarioFormData} from "../../../../shared/schemas/ScenarioSchema.ts";

type ScenarioParametersProps = {
    onSubmit: (data: ScenarioFormData) => void | Promise<void>;
    isLoading: boolean;
};

export const ScenarioParameters = ({
    onSubmit,
    isLoading,
} : ScenarioParametersProps) => {
    const {control, errors, handleSubmit, handleFieldChange} = useScenarioForm();

    return (
        <Paper
            elevation={3}
            className="
                p-5
                rounded-2xl
            "
        >
            <Typography
                variant="h6"
                fontWeight={600}
            >
                Параметры сценария
            </Typography>

            <form
                className="mt-6 flex flex-col gap-6"
                onSubmit={handleSubmit(onSubmit)}>

                {/* Шаблон */}
                <FormControl
                    fullWidth
                    error={!!errors.template}
                >
                    <Typography
                        variant="body2"
                        className="mb-2"
                    >
                        Шаблон сценария
                    </Typography>

                    <Controller
                        name="template"
                        control={control}
                        render={({field}) => (
                            <Select
                                {...field}
                                onChange={(event) =>
                                    handleFieldChange(
                                        field,
                                        event.target.value as ScenarioFormData['template']
                                    )
                                }
                            >
                                <MenuItem value="activity">
                                    Рост активности пользователей
                                </MenuItem>

                                <MenuItem value="inactive">
                                    Снижение активности
                                </MenuItem>

                                <MenuItem value="score">
                                    Увеличение среднего Score
                                </MenuItem>
                            </Select>
                        )}
                    />
                </FormControl>

                {/* Score */}
                <ScenarioSlider
                    control={control}
                    name='scoreDelta'
                    label='Изменение Score'
                    min={-50}
                    max={50}
                    handleFieldChange={handleFieldChange}
                />

                {/* Online */}
                <ScenarioSlider
                    control={control}
                    name='onlinePercent'
                    label='Online пользователей'
                    min={0}
                    max={100}
                    handleFieldChange={handleFieldChange}
                />


                {/* Age */}
                <ScenarioSlider
                    control={control}
                    name='ageDelta'
                    label='Изменение возраста'
                    min={-10}
                    max={10}
                    handleFieldChange={handleFieldChange}
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isLoading}
                >
                    {isLoading
                        ? 'Расчет...'
                        : 'Запустить симуляцию'
                    }
                </Button>
            </form>
        </Paper>
    );
};