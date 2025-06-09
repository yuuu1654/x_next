import { Sidebar } from "@/components/widgets/Sidebar";
import { Timeline } from "@/components/widgets/Timeline";
import { TrendsSidebar } from "@/components/widgets/TrendsSidebar";


export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-black text-white">
      <div className="flex max-w-7xl bg-black justify-center">
        <Sidebar />
        <main className="flex-1 border-l border-r border-gray-800 min-w-2xl max-w-[600px]">
          <Timeline />
        </main>
        <TrendsSidebar />
      </div>
    </div>
  )
}

