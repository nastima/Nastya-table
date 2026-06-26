import {useState} from 'react'
import {Controller} from 'react-hook-form'
import {IconButton, InputAdornment, TextField} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import type {Control} from "react-hook-form";
import type {LoginFormData} from "../../shared/schemas/LoginSchema.ts";


type PasswordFieldProps = {
    control: Control<LoginFormData>
}


export const PasswordField = ({control} : PasswordFieldProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev )
    };

    return (
        <Controller
            name='password'
            control={control}
            render={({field , fieldState}) => (
                <TextField
                    {...field}
                    label='Password'
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    slotProps ={{
                        input: {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton onClick={handleTogglePassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    )


}