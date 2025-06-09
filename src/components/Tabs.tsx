"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export const TabsArea = () => {
  const [activeTab, setActiveTab] = useState<string>("recommended")

  const tabs = [
    { id: "recommended", label: "おすすめ" },
    { id: "following", label: "フォロー中" },
    { id: "nextjs", label: "Next.js" },
  ]

  return (
    <div className="bg-black border-b border-gray-800 sticky top-0 z-10">
      <div className="flex justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn("flex-1 py-4 text-center relative", activeTab === tab.id ? "text-white" : "text-gray-500")}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="text-lg">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 mx-auto w-16 h-1 bg-[#1d9bf0] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
