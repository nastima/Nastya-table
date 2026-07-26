import {Controller} from "react-hook-form";
import type {Control, FieldValues, Path, ControllerRenderProps} from "react-hook-form";
import {Slider, Typography} from "@mui/material";

type ScenarioSliderProps<T extends FieldValues> = {
    control: Control<T>;
    name:Path<T>;
    label: string;
    min: number;
    max: number;
    handleFieldChange: (
        field: ControllerRenderProps<T, Path<T>>,
        value: number
    ) => void;
};

export const ScenarioSlider = <T extends FieldValues>({
    control,
    name,
    label,
    min,
    max,
    handleFieldChange,
}: ScenarioSliderProps<T>) => {
    return (
        <div>
            <Typography variant="body2">
                {label}
            </Typography>

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Slider
                        value={field.value}
                        onChange={(_, value) =>
                            handleFieldChange(
                                field,
                                value as number
                            )
                        }
                        min={min}
                        max={max}
                        valueLabelDisplay="auto"
                    />
                )}
            />
        </div>
    );
};