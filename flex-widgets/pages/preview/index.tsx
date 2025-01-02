import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { ArrowRight, Package, Github } from "lucide-react";

import {
  CodePreviewWidget,
  FeaturesWidget,
  LibraryStatsWidget,
} from "./widgets";

import DefaultLayout from "@/layouts/default";
import { Widget } from "@/types";
import { updatePosition } from "@/components/dnd/context";
import { GridComponent } from "@/components/grid/Grid";
import { Grid } from "@/components/grid/Grid";
import { siteConfig } from "@/config/site";

const white_widget =
  "ring-2 ring-neutral-600 bg-white hover:ring-neutral-800 shadow-sm";
const accent_widget = "bg-red-500 hover:bg-red-600 text-white";

const widgets: Widget[] = [
  // Library Header
  new Widget(
    { x: 1, y: 0 },
    { width: 3, height: 2 },
    { className: white_widget },
    <LibraryStatsWidget />,
  ),

  // Quick Action Buttons
  new Widget(
    { x: 4, y: 0 },
    { width: 1, height: 1 },
    {
      className: accent_widget,
      tileWidgetGap: 16,
    },
    (
      <a
        className="flex flex-col items-center justify-center h-full"
        href={siteConfig.links.github}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Github size={24} />
        <span className="text-sm mt-2">GitHub</span>
      </a>
    ),
  ),
  new Widget(
    { x: 5, y: 0 },
    { width: 1, height: 1 },
    {
      className: accent_widget,
      tileWidgetGap: 16,
    },
    (
      <div className="flex flex-col items-center justify-center h-full">
        <Package size={24} />
        <span className="text-sm mt-2">NPM</span>
      </div>
    ),
  ),

  // Features Section
  new Widget(
    { x: 4, y: 1 },
    { width: 2, height: 3 },
    { className: white_widget },
    <FeaturesWidget />,
  ),

  // Code Preview
  new Widget(
    { x: 1, y: 2 },
    { width: 3, height: 2 },
    { className: white_widget },
    <CodePreviewWidget />,
  ),

  // Get Started Button
  new Widget(
    { x: 0, y: 4 },
    { width: 7, height: 1 },
    {
      className:
        "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-sm",
    },
    (
      <div className="flex items-center justify-center gap-3 h-full">
        <span className="text-lg font-semibold">
          Get Started with Flex Widgets
        </span>
        <ArrowRight size={20} />
      </div>
    ),
  ),
];

const main: Grid = new Grid("main", { height: 5, width: 7 }, widgets);
const grids = [main];

function handleDragEnd(event: DragEndEvent) {
  const delta = updatePosition(event);

  grids.forEach((grid) => {
    grid.moveWidget(delta.id, delta.delta);
  });
}

export default function RepoPage() {
  return (
    <DefaultLayout className="bg-gray-100 min-h-screen p-6">
      <DndContext onDragEnd={handleDragEnd}>
        <GridComponent grid={main} />
      </DndContext>
    </DefaultLayout>
  );
}
