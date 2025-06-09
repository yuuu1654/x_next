import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { RiSearchLine, RiMoreLine } from "react-icons/ri"
// import { Avatar } from "@/components/ui/avatar"

export const TrendsSidebar = () => {
  return (
    <aside className="w-80 p-4 sticky top-0 h-screen hidden lg:block space-y-4 overflow-y-auto">
      <div className="relative">
        {/* <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" /> */}
        <Input
          className="bg-[#202327] border-none rounded-full pl-10 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#1d9bf0]"
          placeholder="検索"
        />
      </div>

      {/* <Card className="bg-[#16181c] border-none rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">プレミアムにサブスクライブ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm">
            サブスクライブして新機能を利用しましょう。資格を満たしている場合、収益配分を受け取れます。
          </p>
          <Button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white rounded-full font-bold">購入する</Button>
        </CardContent>
      </Card>

      <Card className="bg-[#16181c] border-none rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">「いま」を見つけよう</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">音楽・トレンド</span>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                <RiMoreLine className="h-4 w-4" />
              </Button>
            </div>
            <p className="font-bold">小田和正さん</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">スポーツ・トレンド</span>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                <RiMoreLine className="h-4 w-4" />
              </Button>
            </div>
            <p className="font-bold">戸郷10失点</p>
            <p className="text-xs text-gray-500">1,377件のポスト</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">日本のトレンド</span>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                <RiMoreLine className="h-4 w-4" />
              </Button>
            </div>
            <p className="font-bold">#ミュージックステーション</p>
            <p className="text-xs text-gray-500">5,307件のポスト</p>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">日本のトレンド</span>
              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                <RiMoreLine className="h-4 w-4" />
              </Button>
            </div>
            <p className="font-bold">美羽ちゃん</p>
            <p className="text-xs text-gray-500">1,064件のポスト</p>
          </div>

          <Button
            variant="ghost"
            className="text-[#1d9bf0] w-full justify-start p-0 hover:bg-transparent hover:underline"
          >
            さらに表示
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#16181c] border-none rounded-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">おすすめユーザー</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <img src="/placeholder.svg?height=40&width=40" alt="User" className="rounded-full" />
              </Avatar>
              <div>
                <p className="font-bold">ユーザー名</p>
                <p className="text-sm text-gray-500">@username</p>
              </div>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full text-sm font-bold">フォロー</Button>
          </div>
        </CardContent>
      </Card> */}
    </aside>
  )
}
