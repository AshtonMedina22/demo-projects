import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Search, Bell, User } from "lucide-react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#09090b] text-zinc-100 antialiased">
        <AppSidebar />
        <SidebarInset className="flex flex-col bg-[#09090b] border-l border-[#1f1f23]">
          <header className="flex h-16 shrink-0 items-center justify-between border-b border-[#1f1f23] px-8 sticky top-0 bg-[#09090b]/80 backdrop-blur-xl z-20">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-zinc-500 hover:text-zinc-100 transition-colors" />
              <div className="h-4 w-px bg-zinc-800 hidden md:block mx-2" />
              <div className="relative hidden md:flex items-center">
                <Search className="absolute left-0 h-3.5 w-3.5 text-zinc-600" />
                <input
                  type="text"
                  placeholder="Search lead or event..."
                  className="bg-transparent border-none pl-6 pr-4 py-1.5 text-[13px] font-medium w-64 text-zinc-100 placeholder:text-zinc-600 focus:outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button className="relative p-2 text-zinc-500 hover:text-zinc-100 transition-colors">
                  <Bell className="h-4 w-4" />
                  <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-zinc-100 rounded-full"></span>
                </button>
              </div>
              <div className="h-8 w-8 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700 ring-4 ring-zinc-900">
                <img src="https://avatar.iran.liara.run/public/32" alt="Avatar" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto h-full scrollbar-hide">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
