"use server";

import {auth} from "@/lib/better-auth/auth";
import {inngest} from "@/lib/inngest/client";
import {headers} from "next/headers";

export const signUpWithEmail = async ({email, password, fullName, preferredIndustry, investmentGoals, riskTolerance, country}: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({body: {email, password, name: fullName}});

        if (response) {
            await inngest.send({
                name: "app/user.created",
                data: {
                    email,
                    name: fullName,
                    preferredIndustry,
                    investmentGoals,
                    riskTolerance,
                    country
                }
            })
        }

        return {success: true, data: response};
    } catch (e) {
        console.log("Signing up failed ", e)
        return {success: false, message: `Sign up failed ${e}`};

    }
}

export const signOut = async () => {
    try {
        await auth.api.signOut({
            headers: await headers(),
        })
    } catch (e) {
        console.log("Sign out failed ", e)
        return {success: false, message: `Sign out failed ${e}`};
    }
}

export const signInWithEmail = async ({email, password}: SignInFormData) => {
    try {
        const response = await auth.api.signInEmail({body: {email, password}});

        return {success: true, data : response}
    } catch (e) {
        console.log("Sign In failed ", e)
        return {success: false, message: `Sign In failed ${e}`};
    }
}