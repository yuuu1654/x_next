import { TabsArea } from "../Tabs";
import { API_BASE_URL } from "@/lib/constant";
import { TweetForm } from "../TweetForm";
import { TweetList } from "../TweetList";

export const Timeline = async () => {
  const res = await fetch(`${API_BASE_URL}/tweets`);
  const tweets = await res.json();
  console.log("tweets", tweets);

  return (
    <div className="flex flex-col min-w-[600px]">
      {/* タイムラインの切り替えタブ (おすすめ、フォロー) */}
      <TabsArea />
      {/* ツイート投稿フォーム */}
      <TweetForm />
      {/* フィード */}
      <TweetList tweets={tweets} />
    </div>
  );
};
