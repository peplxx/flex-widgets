import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Grid, GridComponent } from "@/components/clases/Grid";
import DefaultLayout from "@/layouts/default";
import { Widget } from "@/types";
import { TILE_SIZE } from "@/config/grid";

let widgets: Widget[] = [
  new Widget(
    { x: 0, y: 0 },
    { width: 2, height: 2 },
    { className: "ring-2 ring-neutral-600 bg-white" },
  ),
];

let main: Grid = new Grid("main", { height: 4, width: 4 }, widgets);
let main2: Grid = new Grid("main2", { height: 4, width: 4 }, []);
let grids = [main, main2];

console.log(grids);

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
        <div className="min-w-40" />
        {/*  Spacer */}
        <GridComponent grid={main2} />
      </DndContext>
    </DefaultLayout>
  );
}
