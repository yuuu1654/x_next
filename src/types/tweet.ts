export type Tweet = {
  id: number;
  user_id: number;
  content: string;
  created_at: string;
  updated_at: string;
  image_urls?: string[]; // ActiveStorageから取得する画像URL配列
};
