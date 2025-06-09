import { Tweet } from "@/types/tweet";
import { TweetCard } from "./TweetCard";

type Props = {
  tweets: Tweet[];
};
export const TweetList = (props: Props) => {
  const { tweets } = props;
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
