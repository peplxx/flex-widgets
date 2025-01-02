import {
  Move,
  Grid,
  Palette,
  Puzzle,
  Zap,
  ArrowUp,
  Code,
  Package,
} from "lucide-react";

export function LibraryStatsWidget() {
  return (
    <div className="text-black w-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <Package className="text-red-500" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">
            Library Stats
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-neutral-900">Flex Widgets</h3>
        <p className="text-neutral-600 mt-1">Flexible Modular Library</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-lg p-3">
          <div className="text-sm text-neutral-600">Bundle Size</div>
          <div className="text-lg font-semibold text-neutral-900 mt-1">
            12kb
          </div>
        </div>
        <div className="bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-lg p-3">
          <div className="text-sm text-neutral-600">TypeScript</div>
          <div className="text-lg font-semibold text-neutral-900 mt-1">
            100%
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesWidget() {
  return (
    <div className="text-black w-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <Puzzle className="text-red-500" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">Features</span>
        </div>
      </div>
      <div className="space-y-3 mt-6">
        <FeatureItem
          description="Intuitive drag and drop interface"
          icon={<Move />}
          title="Drag & Drop"
        />
        <FeatureItem
          description="Responsive grid layout"
          icon={<Grid />}
          title="Grid System"
        />
        <FeatureItem
          description="Customizable themes & styles"
          icon={<Palette />}
          title="Themeable"
        />
      </div>
    </div>
  );
}

export function PerformanceWidget() {
  return (
    <div className="text-black w-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <Zap className="text-red-500" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">
            Performance
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-neutral-600">Bundle Size</h3>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-3xl font-bold text-neutral-900">12kb</span>
          <span className="flex items-center text-green-700 text-sm bg-green-50 px-2 py-1 rounded-full">
            <ArrowUp className="mr-1" size={14} /> Optimized
          </span>
        </div>
      </div>
      <div className="mt-4">
        <MetricBar label="Performance" value={95} />
        <MetricBar label="Accessibility" value={90} />
        <MetricBar label="Best Practices" value={88} />
      </div>
    </div>
  );
}

export function CodePreviewWidget() {
  return (
    <div className="text-black w-[90%]">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-neutral-100 rounded-lg inline-flex">
          <Code className="text-red-500" size={20} />
        </div>
        <div className="bg-neutral-100 rounded-full px-3 py-1">
          <span className="text-xs font-medium text-neutral-600">
            Quick Start
          </span>
        </div>
      </div>
      <div className="mt-4 bg-neutral-900 rounded-lg p-4 font-mono text-sm text-neutral-100">
        <div className="text-neutral-400">{"// Clone project"}</div>
        <div className="text-neutral-100">git clone ...</div>
        <div className="mt-2 text-neutral-400">{"// Create a widget"}</div>
        <div className="text-neutral-100">{"<Widget"}</div>
        <div className="text-npeutral-100 pl-4">
          {"position={{ x: 0, y: 0 }}"}
        </div>
        <div className="text-neutral-100 pl-4">
          {"size={{ width: 2, height: 2 }}"}
        </div>
        <div className="text-neutral-100">{"/>"}</div>
      </div>
    </div>
  );
}

export function QuickActionWidget({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Icon className="text-white" />
      <span className="text-sm mt-2 text-white font-medium">{label}</span>
    </div>
  );
}

export function IconStatsWidget({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center">
        <Icon className="text-white" />
      </div>
      <span className="text-xl font-bold mt-2">{value}</span>
      <span className="text-sm mt-1 opacity-90">{label}</span>
    </div>
  );
}

interface FeatureItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3 bg-neutral-50 hover:bg-neutral-100 transition-colors rounded-lg p-3">
      <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-red-500">
        {icon}
      </div>
      <div>
        <div className="font-medium text-neutral-900">{title}</div>
        <div className="text-sm text-neutral-600">{description}</div>
      </div>
    </div>
  );
}

interface MetricBarProps {
  label: string;
  value: number;
}

function MetricBar({ label, value }: MetricBarProps) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-neutral-600">{label}</span>
        <span className="text-neutral-900 font-medium">{value}%</span>
      </div>
      <div className="bg-neutral-100 rounded-full h-2">
        <div
          className="bg-red-500 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
