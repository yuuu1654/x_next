"use server";

import { LoginFormSchema } from "@/components/widgets/LoginForm";
import { SignupFormSchema } from "@/components/widgets/SignupForm";
import { API_BASE_URL } from "@/lib/constant";

export async function signup(values: SignupFormSchema) {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        birthday: `${values.year}-${values.month}-${values.day}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Success create user in server:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error occured when creating user:", error);
    return { success: false, error: String(error) };
  }
}

export async function login(values: LoginFormSchema) {
  try {
    const res = await fetch(`${API_BASE_URL}/users/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password
      })
    })
    console.log("res", res)
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`)
    }
    const data = await res.json();
    console.log("success login in server", data)
    return { success: true, data }
  } catch (error) {
    console.error("failure login", error)
    return { success: false, error: String(error) }
  }
}
