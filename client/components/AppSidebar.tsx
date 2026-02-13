import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Briefcase,
  Contact,
  Settings,
  Truck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    url: "/",
    icon: Users,
  },
  {
    title: "Sales Orders",
    url: "/sales",
    icon: ShoppingCart,
  },
  {
    title: "Projects",
    icon: Briefcase,
    url: "/projects",
  },
  {
    title: "Contacts",
    icon: Contact,
    url: "/contacts",
  },
  {
    title: "Vendor Portal",
    url: "/vendor-portal",
    icon: Truck,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-[#1f1f23] bg-[#09090b]">
      <SidebarHeader className="border-b border-[#1f1f23] px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-950 font-black text-xl shadow-lg">
            Y
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-100">Your Business</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">Premium CRM</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-6 bg-[#09090b]">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-4">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    className="h-10 px-3 rounded-lg transition-all duration-200 group relative"
                  >
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className={cn(
                        "h-4 w-4 transition-colors",
                        location.pathname === item.url ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-300"
                      )} />
                      <span className={cn(
                        "text-[13px] font-bold tracking-tight transition-colors",
                        location.pathname === item.url ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-300"
                      )}>{item.title}</span>
                      {location.pathname === item.url && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="absolute left-0 w-1 h-5 bg-zinc-100 rounded-full"
                        />
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-[#1f1f23] p-6 bg-[#09090b]">
        <div className="flex items-center gap-3 px-2">
          <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
            <span className="text-[10px] font-bold text-zinc-300">AM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-zinc-200">Ashton Medina</span>
            <span className="text-[10px] font-medium text-zinc-600">Administrator</span>
          </div>
          <Settings className="ml-auto h-3.5 w-3.5 text-zinc-600 hover:text-zinc-300 cursor-pointer transition-colors" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
