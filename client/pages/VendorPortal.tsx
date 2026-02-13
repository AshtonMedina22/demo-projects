import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bell, 
  FileCheck, 
  AlertTriangle, 
  Quote, 
  MoreHorizontal,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";

const workOrders = [
  {
    event: "Morrison Wedding",
    date: "Mar 15, 2026",
    service: "DJ & Sound",
    status: "Accepted",
    statusVariant: "success",
    action: "View Details"
  },
  {
    event: "TechCorp Gala",
    date: "Mar 22, 2026",
    service: "DJ & Lighting",
    status: "Pending",
    statusVariant: "warning",
    action: "Accept/Decline"
  },
  {
    event: "Rivera Quinceañera",
    date: "Apr 5, 2026",
    service: "Full Entertainment",
    status: "In Progress",
    statusVariant: "info",
    action: "Update Status"
  },
  {
    event: "Habitat Fundraiser",
    date: "Apr 12, 2026",
    service: "Sound System",
    status: "Completed",
    statusVariant: "secondary",
    action: "View Summary"
  }
];

const getStatusBadge = (status: string, variant: string) => {
  switch (variant) {
    case 'success':
      return <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-2 py-0 h-5 font-bold text-[10px] uppercase tracking-wider">Accepted</Badge>;
    case 'warning':
      return <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-2 py-0 h-5 font-bold text-[10px] uppercase tracking-wider">Pending</Badge>;
    case 'info':
      return <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-2 py-0 h-5 font-bold text-[10px] uppercase tracking-wider">In Progress</Badge>;
    default:
      return <Badge className="bg-zinc-500/10 text-zinc-400 border-zinc-500/20 px-2 py-0 h-5 font-bold text-[10px] uppercase tracking-wider text-zinc-500">Completed</Badge>;
  }
};

export default function VendorPortal() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full bg-[#09090b]">
        {/* Vendor Top Bar */}
        <div className="border-b border-[#1f1f23] bg-[#09090b]/50 backdrop-blur-xl px-8 py-6">
          <div className="flex items-center justify-between max-w-[1600px] mx-auto w-full">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Vendor Portal</span>
              <h1 className="text-2xl font-bold text-zinc-100 tracking-tight flex items-center gap-3">
                Elite Sound Productions
                <Badge variant="outline" className="border-zinc-800 text-zinc-500 text-[10px] h-5 px-2 font-bold uppercase">Gold Partner</Badge>
              </h1>
            </div>
            <div className="flex items-center gap-4">
               <button className="relative p-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-lg transition-all border border-zinc-800">
                <Bell className="h-4 w-4" />
                <span className="absolute top-2 right-2 h-1.5 w-1.5 bg-emerald-500 rounded-full ring-2 ring-[#09090b]"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8">
            
            {/* Section 1 - Work Orders */}
            <div className="xl:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-zinc-200 tracking-tight">My Work Orders</h2>
                <button className="text-[11px] font-bold text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest">View Archives</button>
              </div>

              <div className="rounded-xl border border-zinc-900 bg-zinc-950/50 overflow-hidden shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-900 bg-zinc-900/30">
                      <th className="px-6 py-4 text-[11px] font-black text-zinc-500 uppercase tracking-[0.15em]">Event Name</th>
                      <th className="px-6 py-4 text-[11px] font-black text-zinc-500 uppercase tracking-[0.15em]">Event Date</th>
                      <th className="px-6 py-4 text-[11px] font-black text-zinc-500 uppercase tracking-[0.15em]">Service Type</th>
                      <th className="px-6 py-4 text-[11px] font-black text-zinc-500 uppercase tracking-[0.15em]">Status</th>
                      <th className="px-6 py-4 text-[11px] font-black text-zinc-500 uppercase tracking-[0.15em] text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {workOrders.map((order, idx) => (
                      <motion.tr 
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group hover:bg-zinc-900/20 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{order.event}</span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-zinc-400 font-medium text-xs">
                            <Clock className="h-3 w-3 opacity-50" />
                            {order.date}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-zinc-400 font-medium text-xs">
                            <Briefcase className="h-3 w-3 opacity-50" />
                            {order.service}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          {getStatusBadge(order.status, order.statusVariant)}
                        </td>
                        <td className="px-6 py-5 text-right">
                          {order.status === "Pending" ? (
                            <div className="flex items-center justify-end gap-2">
                              <button className="h-8 px-3 rounded-md bg-emerald-500 text-[10px] font-black uppercase text-emerald-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10">Accept</button>
                              <button className="h-8 px-3 rounded-md bg-zinc-800 text-[10px] font-black uppercase text-zinc-400 hover:bg-zinc-700 transition-colors">Decline</button>
                            </div>
                          ) : (
                            <button className="text-[11px] font-bold text-zinc-500 hover:text-zinc-100 transition-all flex items-center gap-1.5 ml-auto group/btn">
                              {order.action}
                              <ChevronRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2 - Sidebar Stats & Compliance */}
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-zinc-200 tracking-tight">System Status</h2>
              
              <div className="space-y-4">
                {/* Compliance Card */}
                <Card className="bg-zinc-950 border-zinc-900 shadow-none overflow-hidden group">
                  <div className="h-1 w-full bg-emerald-500/50" />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-zinc-200">Compliance Status</h4>
                        <p className="text-[11px] font-medium text-zinc-500">All documents current and verified.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Expiration Alert */}
                <Card className="bg-zinc-950 border-zinc-900 shadow-none overflow-hidden">
                  <div className="h-1 w-full bg-amber-500/50" />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-zinc-200">Next Expiring</h4>
                        <p className="text-[11px] font-black text-amber-500/90 uppercase tracking-tighter">Insurance Certificate</p>
                        <p className="text-[11px] font-medium text-zinc-500">Expires Apr 30, 2026</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* RFQ Card */}
                <Card className="bg-zinc-950 border-zinc-900 shadow-none overflow-hidden hover:border-zinc-700 transition-colors cursor-pointer group">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 group-hover:text-zinc-200 transition-colors">
                        <Quote className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className="border-zinc-800 text-zinc-500 text-[10px]">Active</Badge>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-zinc-200">Open RFQs</h4>
                      <p className="text-2xl font-black text-zinc-100">2 <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest ml-1">Pending Quotes</span></p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">
                      Manage Quotes
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-900/50 space-y-3">
                <h5 className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] px-1">Quick Support</h5>
                <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-900 text-[11px] font-bold text-zinc-400 hover:text-zinc-200 transition-all">
                  Submit Support Ticket
                  <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-zinc-900 text-[11px] font-bold text-zinc-400 hover:text-zinc-200 transition-all">
                  Update Payout Info
                  <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
