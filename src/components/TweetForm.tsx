"use client";

import Image from "next/image";
import { Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RiImage2Line, RiCloseLine } from "react-icons/ri";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTweet } from "@/actions/tweet";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useState, useRef } from "react";

const tweetFormSchema = z.object({
  content: z
    .string()
    .min(1, {
      message: "contentが空です",
    })
    .max(140, {
      message: "ツイートは140文字以内で作成してください",
    }),
  images: z
    .array(z.instanceof(File))
    .max(4, {
      message: "画像は最大4枚まで投稿できます",
    })
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        // 各ファイルが5MB以下かチェック
        return files.every((file) => file.size <= 5 * 1024 * 1024);
      },
      {
        message: "画像ファイルは1枚あたり5MB以下にしてください",
      }
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true;
        // 合計サイズが8MB以下かチェック
        const totalSize = files.reduce((sum, file) => sum + file.size, 0);
        return totalSize <= 8 * 1024 * 1024;
      },
      {
        message: "画像の合計サイズは8MB以下にしてください",
      }
    )
    .optional(),
});

export type TweetFormSchema = z.infer<typeof tweetFormSchema>;

export const TweetForm = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<TweetFormSchema>({
    resolver: zodResolver(tweetFormSchema),
    defaultValues: {
      content: "",
      images: [],
    },
  });

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const totalImages = selectedImages.length + files.length;

    if (totalImages > 4) {
      alert("画像は最大4枚まで投稿できます");
      return;
    }

    // 個別ファイルサイズチェック
    const oversizedFiles = files.filter((file) => file.size > 5 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      alert(
        `以下のファイルが5MBを超えています：\n${oversizedFiles
          .map((f) => f.name)
          .join("\n")}`
      );
      return;
    }

    // 合計サイズチェック
    const currentTotalSize = selectedImages.reduce(
      (sum, file) => sum + file.size,
      0
    );
    const newFilesTotalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (currentTotalSize + newFilesTotalSize > 8 * 1024 * 1024) {
      alert("画像の合計サイズが8MBを超えます。一部の画像を削除してください。");
      return;
    }

    const newImages = [...selectedImages, ...files];
    setSelectedImages(newImages);
    form.setValue("images", newImages);

    // プレビューURL生成
    const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
  };

  const removeImage = (index: number) => {
    const newImages = selectedImages.filter((_, i) => i !== index);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);

    // 古いURLをクリーンアップ
    URL.revokeObjectURL(previewUrls[index]);

    setSelectedImages(newImages);
    setPreviewUrls(newPreviewUrls);
    form.setValue("images", newImages);
  };

  const onSubmit = async (values: TweetFormSchema) => {
    // ツイート投稿処理
    const postTweet = await createTweet(values);

    if (postTweet.success) {
      // 成功時にフォームをリセット
      form.reset();
      setSelectedImages([]);
      setPreviewUrls([]);

      // プレビューURLをクリーンアップ
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    }

    return postTweet;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-4 border-b border-gray-800"
      >
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <Image
              src="/yuuu_img.jpg"
              alt={"投稿者画像"}
              width={500}
              height={500}
              className="rounded-full"
            />
          </Avatar>
          <div className="flex-1">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-transparent border-none text-lg placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="いまどうしてる？"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* 画像プレビューエリア */}
            {previewUrls.length > 0 && (
              <div className="mt-4">
                <div
                  className={`grid gap-2 ${
                    previewUrls.length === 1
                      ? "grid-cols-1"
                      : previewUrls.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-2"
                  }`}
                >
                  {previewUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={url}
                        alt={`プレビュー ${index + 1}`}
                        width={200}
                        height={200}
                        className="rounded-lg object-cover w-full h-32"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-1 right-1 bg-black/50 hover:bg-black/70 rounded-full h-6 w-6"
                        onClick={() => removeImage(index)}
                      >
                        <RiCloseLine className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageSelect}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-[#1d9bf0] rounded-full"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={selectedImages.length >= 4}
                >
                  <RiImage2Line className="h-9 w-9 font-bold" />
                </Button>
              </div>
              <Button
                type="submit"
                className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white rounded-full px-4"
              >
                ポストする
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
