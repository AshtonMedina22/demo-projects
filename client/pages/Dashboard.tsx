import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Settings2, 
  Calendar as CalendarIcon,
  ChevronDown,
  DollarSign,
  Briefcase,
  Users,
  Percent
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const revenueData = [
  { month: "Sep", revenue: 320000 },
  { month: "Oct", revenue: 350000 },
  { month: "Nov", revenue: 380000 },
  { month: "Dec", revenue: 420000 },
  { month: "Jan", revenue: 450000 },
  { month: "Feb", revenue: 487200 },
];

const serviceData = [
  { name: "DJ & Sound", value: 35 },
  { name: "Photo/Video", value: 25 },
  { name: "Lighting", value: 20 },
  { name: "Catering", value: 12 },
  { name: "Other", value: 8 },
];

const COLORS = ["#f4f4f5", "#a1a1aa", "#71717a", "#3f3f46", "#18181b"];

const conversionData = [
  { day: "Day 1", rate: 28 },
  { day: "Day 5", rate: 30 },
  { day: "Day 10", rate: 29 },
  { day: "Day 15", rate: 31 },
  { day: "Day 20", rate: 33 },
  { day: "Day 25", rate: 32 },
  { day: "Day 30", rate: 34 },
];

const topProjects = [
  { name: "Global Tech Summit", revenue: "$145,000", margin: 42 },
  { name: "Metropolitan Gala", revenue: "$98,000", margin: 39 },
  { name: "Evergreen Wedding", revenue: "$45,000", margin: 38 },
  { name: "Coastal Retreat", revenue: "$32,000", margin: 36 },
  { name: "Startup Connect", revenue: "$28,000", margin: 35 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full bg-[#09090b]">
        {/* Analytics Top Bar */}
        <div className="border-b border-[#1f1f23] bg-[#09090b]/50 backdrop-blur-xl px-8 py-4">
          <div className="flex flex-wrap items-center justify-between max-w-[1600px] mx-auto w-full gap-4">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-xs font-bold text-zinc-100 hover:bg-zinc-800 transition-all">
                <CalendarIcon className="h-3.5 w-3.5 text-zinc-500" />
                Last 30 Days
                <ChevronDown className="h-3.5 w-3.5 text-zinc-500" />
              </button>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-zinc-800 text-zinc-500 hover:text-zinc-100 transition-colors" title="Export PDF">
                  <Download className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 text-xs font-bold text-zinc-500 hover:text-zinc-100 transition-colors">
                  Export Excel
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">Customize Layout</span>
              <button className="h-6 w-11 rounded-full bg-zinc-800 relative transition-colors p-1">
                <div className="h-4 w-4 rounded-full bg-zinc-400" />
              </button>
              <button className="p-2 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors">
                <Settings2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-[1600px] mx-auto space-y-8 pb-12">
            
            {/* Row 1 - KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Revenue", value: "$487,200", trend: "+12%", up: true, icon: DollarSign },
                { label: "Active Projects", value: "24", trend: "0%", up: null, icon: Briefcase },
                { label: "Vendor Response Rate", value: "94%", trend: "+2.5%", up: true, icon: Users, color: "text-emerald-500" },
                { label: "Avg Margin", value: "38.2%", trend: "-0.4%", up: false, icon: Percent },
              ].map((kpi, idx) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="bg-zinc-950 border-zinc-900 shadow-none">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-500">
                        {kpi.label}
                      </CardTitle>
                      <kpi.icon className="h-4 w-4 text-zinc-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-zinc-100">{kpi.value}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {kpi.up === true && <TrendingUp className="h-3 w-3 text-emerald-500" />}
                        {kpi.up === false && <TrendingDown className="h-3 w-3 text-rose-500" />}
                        <span className={`text-[11px] font-bold ${kpi.up === true ? 'text-emerald-500' : kpi.up === false ? 'text-rose-500' : 'text-zinc-500'}`}>
                          {kpi.trend}
                        </span>
                        <span className="text-[10px] text-zinc-600 font-medium ml-1">vs prev. period</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Row 2 - Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-zinc-950 border-zinc-900 shadow-none">
                <CardHeader>
                  <CardTitle className="text-sm font-bold text-zinc-200">Monthly Revenue</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        stroke="#52525b" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#52525b" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#09090b", border: "1px solid #18181b", fontSize: "12px" }}
                        cursor={{ fill: "#18181b" }}
                      />
                      <Bar dataKey="revenue" fill="#f4f4f5" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="bg-zinc-950 border-zinc-900 shadow-none">
                <CardHeader>
                  <CardTitle className="text-sm font-bold text-zinc-200">Revenue by Service Type</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px] flex items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {serviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#09090b", border: "1px solid #18181b", fontSize: "12px" }}
                      />
                      <Legend 
                        verticalAlign="middle" 
                        align="right" 
                        layout="vertical" 
                        wrapperStyle={{ fontSize: "11px", color: "#a1a1aa", paddingLeft: "20px" }}
                        formatter={(value, entry: any) => `${value} (${entry.payload.value}%)`}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Row 3 - Conversion & Table */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <Card className="lg:col-span-3 bg-zinc-950 border-zinc-900 shadow-none">
                <CardHeader>
                  <CardTitle className="text-sm font-bold text-zinc-200">Pipeline Conversion Rate</CardTitle>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={conversionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#18181b" vertical={false} />
                      <XAxis 
                        dataKey="day" 
                        stroke="#52525b" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                      />
                      <YAxis 
                        stroke="#52525b" 
                        fontSize={11} 
                        tickLine={false} 
                        axisLine={false} 
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip 
                        contentStyle={{ backgroundColor: "#09090b", border: "1px solid #18181b", fontSize: "12px" }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="rate" 
                        stroke="#f4f4f5" 
                        strokeWidth={2} 
                        dot={{ r: 4, fill: "#f4f4f5" }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 bg-zinc-950 border-zinc-900 shadow-none">
                <CardHeader>
                  <CardTitle className="text-sm font-bold text-zinc-200">Top Projects by Margin</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pt-2">
                  <div className="space-y-6">
                    {topProjects.map((project, idx) => (
                      <div key={idx} className="px-6 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold text-zinc-100">{project.name}</div>
                            <div className="text-[10px] text-zinc-600 font-medium">{project.revenue} Revenue</div>
                          </div>
                          <div className="text-xs font-black text-zinc-300">{project.margin}%</div>
                        </div>
                        <Progress value={project.margin} className="h-1 bg-zinc-900" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
