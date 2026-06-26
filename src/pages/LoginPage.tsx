import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod';
import { loginSchema} from '../shared/schemas/LoginSchema.ts';
import type {LoginFormData} from '../shared/schemas/LoginSchema.ts';

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<LoginFormData>({resolver: zodResolver(loginSchema)});

    const onSubmit = (data: LoginFormData) => {console.log(data)};

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input
                    placeholder='Email'
                    {...register('email')}
                />

                {errors.email && (
                    <p>{errors.email.message}</p>
                )}
            </div>

            <div>
                <input
                    type='password'
                    placeholder='Пароль'
                    {...register('password')}
                />

                {errors.password && (
                    <p>{errors.password.message}</p>
                )}
            </div>

            <button type='submit'>Войти</button>
        </form>
    );
};