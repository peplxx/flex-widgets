import { DragEndEvent } from "@dnd-kit/core";

import { DraggedDelta } from "@/types";
import { TILE_SIZE } from "@/config/grid";

export function updatePosition(event: DragEndEvent): DraggedDelta {
  const transform = event.delta;
  const draggedX = Math.round((transform?.x ?? 0) / TILE_SIZE);
  const draggedY = Math.round((transform?.y ?? 0) / TILE_SIZE);
  const newPos = {
    x: draggedX,
    y: draggedY,
  };

  return {
    id: event.active.id.toString(),
    over_id: event.over?.id.toString(),
    delta: { x: newPos.x, y: newPos.y },
  };
}
