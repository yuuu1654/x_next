"use server";

import { FormSchema } from "@/components/widgets/SignupForm";

export async function signup(values: FormSchema) {
  try {
    const response = await fetch("http://localhost:3000/api/v1/users", {
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
