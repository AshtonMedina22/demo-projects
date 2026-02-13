import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto bg-[#09090b] min-h-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">{title}</h1>
          <p className="text-sm text-zinc-500 font-medium">This module is currently being integrated with your live data.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-zinc-900 border-zinc-800 shadow-none">
              <CardHeader className="pb-2">
                <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse" />
              </CardHeader>
              <CardContent>
                <div className="h-8 w-32 bg-zinc-800 rounded animate-pulse mb-2" />
                <div className="h-3 w-48 bg-zinc-800 rounded animate-pulse" />
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-zinc-950 border-zinc-900 border-dashed shadow-none">
          <CardContent className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6 border border-zinc-800">
              <span className="text-2xl grayscale opacity-50">✨</span>
            </div>
            <h2 className="text-xl font-bold text-zinc-200 mb-2">Module Integration Pending</h2>
            <p className="text-zinc-500 max-w-sm mx-auto text-[13px] leading-relaxed">
              We are currently mapping the <span className="text-zinc-300 font-bold">{title}</span> architecture. 
              Full functionality will be available in the next deployment cycle.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="mt-8 px-6 py-2.5 bg-zinc-100 text-zinc-950 text-xs font-bold rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Back to Pipeline
            </button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
