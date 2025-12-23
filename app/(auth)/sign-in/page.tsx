"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);
      if (result.success) {
        console.log(result.data);
        router.push("/");
        toast.success("Sign In Successfully!");
      }
    } catch (e) {
      console.log("Sign In failed : ", e);
      toast.error("Sign In failed", {
        description: e instanceof Error ? e.message : "Failed to Sign In",
      });
    }
  };

  return (
    <div className="h-full flex flex-col items-start justify-center w-full">
      <h1 className="form-title">Log in to your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
        <InputField
          name="email"
          label="Email"
          placeholder="example@email.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w+\.\w+$/,
            message: "Please enter a valid email address",
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
            required: "Password is Required",
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Logging In..." : "Log In"}
        </Button>

        <FooterLink
          text="Don't have an account ?"
          linkText="Sign Up."
          href="/sign-up"
        />
      </form>
    </div>
  );
};
export default SignIn;
