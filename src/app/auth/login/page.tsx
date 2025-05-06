import { LoginScreen } from "@/components/screens/LoginScreen";
import { FaXTwitter } from "react-icons/fa6";

export default async function LoginPage() {
  
  return (
    <>
      <main className="min-h-screen bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center min-h-screen">
        <div className="flex-1 flex justify-center items-center  min-h-screen">
          <FaXTwitter className="text-[20rem] text-white" />
        </div>

        <div className="flex flex-col items-center md:items-start md:w-[45%] min-h-screen py-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            すべての話題が、ここに。
          </h1>
          <h2 className="text-xl md:text-3xl mb-8">今すぐ参加しましょう。</h2>

          <LoginScreen />
        </div>
      </div>
    </main>
    </>
  )
}

