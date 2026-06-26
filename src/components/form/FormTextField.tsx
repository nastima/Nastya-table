import {TextField} from "@mui/material";
import {type Control, type FieldValues, type Path, Controller} from "react-hook-form";


type FormTextFieldProps<T extends FieldValues> = {
    control: Control<T>
    name: Path<T>;
    label: string;
    type?: string;
}


export const FormTextField = <T extends FieldValues>({
        control,
        name,
        label,
        type = "text",
    } : FormTextFieldProps<T>) => {

    return (
        <Controller<T>
            name={name}
            control={control}
            render={({ field , fieldState}) => (
                <TextField
                    {...field}
                    label={label}
                    type={type}
                    fullWidth
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                />
            )}
        />
    )
}