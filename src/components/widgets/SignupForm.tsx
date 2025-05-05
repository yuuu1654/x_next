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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { z } from "zod";
import { signup } from "@/actions/auth";

const formSchema = z.object({
  // ▼以下だとnull, undefinedの場合のみエラーを出す
  // name: z.string({
  //   required_error: "Name is required",
  // }),
  name: z.string().min(1, {
    message: "必須項目です"
  }),
  email: z.string().min(1, {
    message: "必須項目です"
  }).email({
    message: "適切な形式のメールアドレスを入力してください"
  }),
  password: z.string().min(7, {
    message: "パスワードは7文字以上で設定してください"
  }).regex(/^[a-zA-Z0-9]{7,30}$/, {
    message: "パスワードは7文字以上30文字以下の英数字で設定してください"
  }),
  year: z.string().min(1, {
    message: "年を選択してください"
  }),
  month: z.string().min(1, {
    message: "月を選択してください"
  }),
  day: z.string().min(1, {
    message: "日を選択してください"
  }),
});



export type FormSchema = z.infer<typeof formSchema>;

export const SignupForm = () => {
  const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema), //ここで、バリデーションを噛ませて、onSubmit実行前に検証している？
    defaultValues: {
      name: "",
      email: "",
      password: "",
      year: "",
      month: "",
      day: "",
    },
  });

  const onSubmit = async (values: FormSchema) => {
    try {
      const result = await signup(values); // signup()は、serverで実行される
      if (result.success) {
        console.log("Success create user:", result.data);
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="名前"
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

        <div className="space-y-2">
          <p className="mb-2">生年月日</p>
          <div className="grid grid-cols-3 gap-2">
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-transparent border-gray-700">
                        <SelectValue placeholder="月" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i} value={String(i + 1)}>
                            {i + 1}月
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="day"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-transparent border-gray-700">
                        <SelectValue placeholder="日" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(31)].map((_, i) => (
                          <SelectItem key={i} value={String(i + 1)}>
                            {i + 1}日
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-transparent border-gray-700">
                        <SelectValue placeholder="年" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(100)].map((_, i) => {
                          const year = new Date().getFullYear() - i;
                          return (
                            <SelectItem key={i} value={String(year)}>
                              {year}年
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-sky-500/100 hover:bg-sky-500/75 rounded-full text-white font-bold py-6 mt-10"
        >
          アカウントを作成
        </Button>
      </form>
    </Form>
  );
};
