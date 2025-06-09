"use server";

import { TweetFormSchema } from "@/components/TweetForm";
import { apiFetch } from "@/lib/api";

/**
 * apiFetch関数を使用してツイート作成処理を統一
 * FormDataを使用してファイルアップロードに対応
 *
 * FormDataとは？
 * - Web APIの一つで、HTMLフォームのデータを表現するために使用
 * - キー/バリューペアでデータを格納し、ファイルも含められる
 * - Content-Type: multipart/form-dataとして送信され、ファイルアップロードに最適
 * - バイナリデータ（画像など）をそのまま送信できるため、JSONより効率的
 */
export async function createTweet(values: TweetFormSchema) {
  const formData = new FormData();

  // ツイート内容を追加
  formData.append("tweet[content]", values.content);

  // 画像ファイルを追加
  /**
   * forEachのパフォーマンスについて：
   * - mapは新しい配列を返すメソッドなので、副作用処理には不適切
   * - forEachは副作用処理（FormDataへの追加）に適している
   * - 数枚の画像程度ではパフォーマンス差は無視できるレベル
   * - より高速にしたい場合はfor...ofやfor文を使用可能
   */
  if (values.images && values.images.length > 0) {
    values.images.forEach((image) => {
      formData.append("tweet[images][]", image);
    });
  }

  return apiFetch("/tweets", "POST", {
    body: formData,
  });
}
