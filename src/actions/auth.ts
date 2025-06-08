"use server";

import { LoginFormSchema } from "@/components/widgets/LoginForm";
import { SignupFormSchema } from "@/components/widgets/SignupForm";
import { apiFetch } from "@/lib/api";

export async function signup(values: SignupFormSchema) {
  return apiFetch("/users", "POST", {
    body: {
      name: values.name,
      email: values.email,
      password: values.password,
      birthday: `${values.year}-${values.month}-${values.day}`,
    }
  })
}

export async function login(values: LoginFormSchema) {
  return apiFetch("/users/sign_in", "POST", {
    body: {
      email: values.email,
      password: values.password,
    }
  })
}
