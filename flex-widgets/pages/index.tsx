import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { LayoutDashboard, Activity } from "lucide-react";

import { Grid, GridComponent } from "@/components/grid/Grid";
import DefaultLayout from "@/layouts/default";
import { Widget } from "@/types";
import {
  SystemStatusWidget,
  TeamActivityWidget,
} from "@/components/widgets/example";
import { VisitorsWidget } from "@/components/widgets/example";
import { updatePosition } from "@/components/dnd/context";

const white_widget = "ring-2 ring-neutral-600 bg-white hover:ring-neutral-800";
let widgets: Widget[] = [
  new Widget(
    { x: 1, y: 0 },
    { width: 2, height: 2 },
    {
      className: white_widget,
    },
    <VisitorsWidget />,
  ),
  new Widget(
    { x: 3, y: 0 },
    { width: 1, height: 1 },
    {
      className: "bg-red-500 hover:bg-red-600",
      tileWidgetGap: 20,
    },
    <LayoutDashboard size={32} />,
  ),
  new Widget(
    { x: 1, y: 2 },
    { width: 3, height: 2 },
    {
      className: white_widget,
    },
    <TeamActivityWidget />,
  ),
  new Widget(
    { x: 3, y: 1 },
    { width: 1, height: 1 },
    {
      className: white_widget,
      tileWidgetGap: 20,
    },
    <Activity size={32} />,
  ),
  new Widget(
    { x: 4, y: 0 },
    { width: 2, height: 4 },
    {
      className: white_widget,
    },
    <SystemStatusWidget />,
  ),
];

let main: Grid = new Grid("main", { height: 6, width: 7 }, widgets);
let grids = [main];

function handleDragEnd(event: DragEndEvent) {
  const delta = updatePosition(event);

  grids.forEach((grid) => {
    grid.moveWidget(delta.id, delta.delta);
  });
}

export default function MainPage() {
  return (
    <DefaultLayout className="bg-white ">
      <DndContext onDragEnd={handleDragEnd}>
        <GridComponent grid={main} />
      </DndContext>
    </DefaultLayout>
  );
}
