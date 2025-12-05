"use client"

import {useForm} from "react-hook-form";
import InputField from "@/components/forms/InputField";
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        control
    } = useForm<SignUpFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onBlur",
    })
    const onSubmit = async (data: SignInFormData) => {
        try {

        } catch (error: any) {

        }
    }

    return (
        <div className="h-full flex flex-col items-start justify-center w-full">
            <h1 className="form-title">Log in to your account</h1>
            <form onSubmit={() => handleSubmit(onSubmit)} className="space-y-5 w-full">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="example@email.com"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: 'Email is required',
                        pattern: /^\w+@\w+\.\w+$/,
                        message: "Please enter a valid email address"
                    }}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your Password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{
                        required: 'Password is Required',
                    }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Logging In...' : 'Log In'}
                </Button>

                <FooterLink text="Don't have an account ?" linkText="Sign Up." href="/sign-up"/>
            </form>
        </div>
    )
}
export default SignIn
