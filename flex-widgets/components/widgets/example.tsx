import {
  BarChart3,
  Activity,
  ArrowUp,
  Users,
  Clock,
  Cloud,
  Calendar,
} from "lucide-react";

export function VisitorsWidget() {
  return (
    <div className="text-black w-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <BarChart3 className="text-neutral-600" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">Last 24h</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-neutral-600">Total Visitors</h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-3xl font-bold text-neutral-900">2,543</span>
          <span className="flex items-center text-red-700 text-sm bg-red-50 px-2 py-1 rounded-full">
            <ArrowUp className="mr-1" size={14} /> 12%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-auto">
        <div className="bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-lg p-3">
          <div className="text-sm text-neutral-600">Users</div>
          <div className="text-lg font-semibold text-neutral-900 mt-1">
            1.2k
          </div>
        </div>
        <div className="bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-lg p-3">
          <div className="text-sm text-neutral-600">Sessions</div>
          <div className="text-lg font-semibold text-neutral-900 mt-1">
            3.1k
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamActivityWidget() {
  return (
    <div className="text-black w-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <Activity className="text-neutral-600" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">
            Team Activity
          </span>
        </div>
      </div>
      <div className="space-y-4 mt-6">
        <ActivityItem
          isPulsing
          icon={<Users className="text-neutral-600" size={18} />}
          time="In 30 minutes"
          title="Weekly Team Sync"
        />
        <ActivityItem
          icon={<Calendar className="text-neutral-600" size={18} />}
          time="Tomorrow, 18:00"
          title="Project Deadline"
        />
      </div>
    </div>
  );
}

interface ActivityItemProps {
  icon: JSX.Element;
  title: string;
  time: string;
  isPulsing?: boolean;
}

function ActivityItem({
  icon,
  title,
  time,
  isPulsing = false,
}: ActivityItemProps) {
  return (
    <div className="flex items-center gap-4 bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-xl p-3">
      <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-neutral-900 truncate">{title}</div>
        <div className="text-sm text-neutral-600 flex items-center gap-1 mt-0.5">
          <Clock size={14} />
          <span>{time}</span>
        </div>
      </div>
      <div
        className={`shrink-0 w-2 h-2 rounded-full bg-red-400 ${isPulsing ? "animate-pulse" : ""}`}
      />
    </div>
  );
}

export function SystemStatusWidget() {
  return (
    <div className="text-black w-[93%] h-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <Cloud className="text-neutral-600" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">
            System Status
          </span>
        </div>
      </div>
      <div className="space-y-6 mt-6">
        <SystemHealth percentage={85} status="Healthy" />
        <div className="space-y-3">
          <StatusItem icon={Activity} label="CPU Usage" value="45%" />
          <StatusItem icon={BarChart3} label="Memory" value="2.1/4GB" />
          <StatusItem icon={Cloud} label="Storage" value="15/32GB" />
        </div>
      </div>
    </div>
  );
}

interface SystemHealthProps {
  percentage: number;
  status: string;
}

function SystemHealth({ percentage, status }: SystemHealthProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-neutral-600 mb-2">
        System Health
      </h3>
      <div className="bg-neutral-100 rounded-full h-2 mb-2">
        <div
          className="bg-red-500 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-600">{percentage}% Operational</span>
        <span className="text-red-600 font-medium">{status}</span>
      </div>
    </div>
  );
}

interface StatusItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

function StatusItem({ icon: Icon, label, value }: StatusItemProps) {
  return (
    <div className="bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-xl p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center">
            <Icon className="text-neutral-600" />
          </div>
          <span className="text-neutral-900">{label}</span>
        </div>
        <span className="font-semibold text-neutral-900">{value}</span>
      </div>
    </div>
  );
}
