import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import React from "react";
import Link from "next/link";
import { PrivacyPolicy } from "./elements/PrivacyPolicy";

export const AuthButton = () => {
  return (
    <div className="flex flex-col gap-3 w-full max-w-[300px]">
      <Button
        variant="outline"
        className="w-full bg-white hover:bg-gray-100 text-black rounded-full"
      >
        <FcGoogle />
        Google で登録
      </Button>

      <Button
        variant="outline"
        className="w-full bg-white hover:bg-gray-100 text-black font-bold rounded-full"
      >
        <FaApple />
        Appleのアカウントで登録
      </Button>
      <Button
        variant="outline"
        className="w-full bg-white hover:bg-gray-100 text-black font-bold rounded-full"
      >
        ログイン
      </Button>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-black px-2 text-gray-400">または</span>
        </div>
      </div>
      <Button className="w-full bg-sky-500/100 hover:bg-sky-500/75 rounded-full text-white font-bold">
        <Link href={"/auth/signup"}>アカウントを作成</Link>
      </Button>

      <PrivacyPolicy />
    </div>
  );
};
