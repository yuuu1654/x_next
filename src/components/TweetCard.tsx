import { Button } from "@/components/ui/button";
import {
  RiMoreLine,
  RiChat1Line,
  RiRepeatLine,
  RiHeartLine,
  RiBookmarkLine,
} from "react-icons/ri";
import { Avatar } from "./ui/avatar";
import Image from "next/image";
import { Tweet } from "@/types/tweet";

type Props = {
  tweet: Tweet;
};
export const TweetCard = ({ tweet }: Props) => {
  return (
    <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
      <div className="flex gap-3">
        <Avatar className="h-10 w-10 hidden sm:block">
          <Image
            src="/yuuu_img.jpg"
            alt={"alt"}
            width={500}
            height={500}
            className="rounded-full"
          />
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold hover:underline">名前</span>

              <span className="text-gray-500">ユーザー名(@yuuu1654)</span>
              <span className="text-gray-500">・</span>
              <span className="text-gray-500">1h</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-8 w-8"
            >
              <RiMoreLine className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-1 whitespace-pre-line">{tweet.content}</div>

          {/* 画像表示エリア */}
          {tweet.image_urls && tweet.image_urls.length > 0 && (
            <div className="mt-3">
              <div
                className={`grid gap-2 rounded-lg overflow-hidden ${
                  tweet.image_urls.length === 1
                    ? "grid-cols-1"
                    : tweet.image_urls.length === 2
                    ? "grid-cols-2"
                    : tweet.image_urls.length === 3
                    ? "grid-cols-2"
                    : "grid-cols-2"
                }`}
              >
                {tweet.image_urls.map((imageUrl, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      tweet.image_urls.length === 3 && index === 0
                        ? "row-span-2"
                        : tweet.image_urls.length === 4 && index < 2
                        ? ""
                        : ""
                    }`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`投稿画像 ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg hover:opacity-95 transition-opacity cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-3 flex justify-between max-w-md">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-[#1d9bf0] hover:bg-gray-900/50 gap-1 p-0"
            >
              <RiChat1Line className="h-4 w-4" />
              <span>5</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-green-500 hover:bg-gray-900/50 gap-1 p-0"
            >
              <RiRepeatLine className="h-4 w-4" />
              <span>6</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-pink-500 hover:bg-gray-900/50 gap-1 p-0"
            >
              <RiHeartLine className="h-4 w-4" />
              <span>7</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-[#1d9bf0] hover:bg-gray-900/50 p-0"
            >
              <RiBookmarkLine className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
