import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Grid, GridComponent } from "@/components/clases/Grid";
import DefaultLayout from "@/layouts/default";
import { Widget } from "@/types";
import { TILE_SIZE } from "@/config/grid";

const widgets: Widget[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    size: { width: 2, height: 2 },
    className: "ring-2 ring-neutral-600 bg-white",
  },
  {
    id: "2",
    position: { x: 2, y: 0 },
    size: { width: 1, height: 1 },
    tileWidgetGap: 20,
    className: "bg-red-500",
  },
  {
    id: "3",
    position: { x: 0, y: 2 },
    size: { width: 3, height: 2 },
    className: "ring-2 ring-neutral-600 bg-white",
  },
  {
    id: "4",
    position: { x: 2, y: 1 },
    size: { width: 1, height: 1 },
    tileWidgetGap: 20,
    className: "bg-red-500",
  },
  {
    id: "5",
    position: { x: 3, y: 0 },
    size: { width: 2, height: 4 },
    className: "ring-2 ring-neutral-600 bg-white",
  },
];

let main: Grid = new Grid("main", { height: 8, width: 5 }, widgets);
let grids = [main];

type DraggedDelta = {
  id: string;
  over_id?: string;
  delta: { x: number; y: number };
};
function updatePosition(event: DragEndEvent): DraggedDelta {
  const transform = event.delta;
  const draggedX = Math.round((transform?.x ?? 0) / TILE_SIZE);
  const draggedY = Math.round((transform?.y ?? 0) / TILE_SIZE);
  const newPos = {
    x: draggedX,
    y: draggedY,
  };

  console.log(event);

  return {
    id: event.active.id.toString(),
    over_id: event.over?.id.toString(),
    delta: { x: newPos.x, y: newPos.y },
  };
}

function handleDragEnd(event: DragEndEvent) {
  const delta = updatePosition(event);

  grids.forEach((grid) => {
    grid.moveWidget(delta.id, delta.delta);
  });
  console.log(delta);
}

export default function GridPage() {
  return (
    <DefaultLayout className="bg-white">
      <DndContext onDragEnd={handleDragEnd}>
        <GridComponent grid={main} />
      </DndContext>
    </DefaultLayout>
  );
}
