"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { login } from "@/actions/auth";

const loginFormSchema = z.object({
  email: z.string().min(1, {
    message: "必須項目です"
  }).email({
    message: "適切な形式のメールアドレスを入力してください"
  }),
  password: z.string().min(1, {
    message: "必須項目です"
  }).regex(/^[0-9a-zA-Z]{7,30}$/, {
    message: "パスワードは7文字以上30文字以下の英数字で設定してください"
  })
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      
    },
  });

  const onSubmit = async (values: LoginFormSchema) => {
    try {
      const result = await login(values); // login()は、serverで実行される
      if (result.success) {
        console.log("Success login:", result.data);
        router.push("/home");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Error occured when creating user:", error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="メールアドレス"
                  className="bg-transparent border-gray-700 focus-visible:ring-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="パスワード"
                  className="bg-transparent border-gray-700 focus-visible:ring-blue-500"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-sky-500/100 hover:bg-sky-500/75 rounded-full text-white font-bold py-6 mt-10"
        >
          ログイン
        </Button>
      </form>
    </Form>
  );
};
