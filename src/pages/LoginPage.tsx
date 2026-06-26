import { useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod';
import { loginSchema} from '../shared/schemas/LoginSchema.ts';
import type {LoginFormData} from '../shared/schemas/LoginSchema.ts';
import {PasswordField} from '../components/form/PasswordField.tsx'
import {FormTextField} from '../components/form/FormTextField.tsx'
import { Button, Paper, Stack, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom';


export const LoginPage = () => {
    const {
        control,
        handleSubmit,
        formState: {
            isSubmitting,
        },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const navigate = useNavigate();

    const onSubmit = async (data: LoginFormData) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 2000)
        })

        console.log(data);
        navigate('/dashboard');
    };


    return (
        <Stack
            sx={{
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f5f5f5'
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    width: 400,
                    padding: 4,
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                        <Typography variant='h4'>Login</Typography>
                        <FormTextField<LoginFormData> control={control} name='email' label='Email'/>

                        <PasswordField control={control}/>

                        <Button variant='contained' type='submit' size='large' disabled={isSubmitting}>Вход</Button>
                    </Stack>
                </form>
            </Paper>
        </Stack>
);
};