import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  RiSearchLine,
  RiMailLine,
  RiBookmarkLine,
  RiUser3Line,
  RiMoreLine,
  RiFlashlightLine,
} from "react-icons/ri"
import { AiFillHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";


import { FaXTwitter } from "react-icons/fa6"

export const Sidebar = () => {
  return (
    <aside className="w-64 p-4 sticky top-0 h-screen hidden md:flex flex-col justify-between">
      <div className="space-y-6">
        <Link href="/" className="inline-block mb-6">
          <FaXTwitter className="h-7 w-7" />
        </Link>

        <nav className="space-y-4">
          <Link href="/" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <AiFillHome className="h-7 w-7" />
            <span>ホーム</span>
          </Link>
          <Link href="/explore" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <RiSearchLine className="h-7 w-7" />
            <span>話題を検索</span>
          </Link>
          <Link
            href="/notifications"
            className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full"
          >
            <IoMdNotificationsOutline className="h-7 w-7" />
            <span>通知</span>
          </Link>
          <Link href="/messages" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <RiMailLine className="h-7 w-7" />
            <span>メッセージ</span>
          </Link>
          <Link href="/grok" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <RiFlashlightLine className="h-7 w-7" />
            <span>Grok</span>
          </Link>
          <Link href="/bookmarks" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <RiBookmarkLine className="h-7 w-7" />
            <span>ブックマーク</span>
          </Link>
          <Link href="/premium" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <FaXTwitter className="h-7 w-7" />
            <span>プレミアム</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <RiUser3Line className="h-7 w-7" />
            <span>プロフィール</span>
          </Link>
          <Link href="/more" className="flex items-center gap-4 text-xl hover:bg-gray-900 px-4 py-2 rounded-full">
            <RiMoreLine className="h-7 w-7" />
            <span>もっと見る</span>
          </Link>
        </nav>
      </div>

      <Button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white rounded-full py-3 w-full text-lg font-bold">
        ポストする
      </Button>
    </aside>
  )
}
