import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";

import DraggableWidget from "@/components/draggable/DraggableWidget";
import GridLayout from "@/layouts/grid";
import { TILE_SIZE } from "@/config/grid";

type Widget = {
  id: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

type DraggedDelta = {
  id: string;
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

  return {
    id: event.active.id.toString(),
    delta: { x: newPos.x, y: newPos.y },
  };
}

export default function PlaygroundPage() {
  const [widgets, setWidgets] = React.useState<Widget[]>([
    {
      id: "1",
      position: { x: 0, y: 0 },
      size: { width: 2, height: 2 },
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const delta = updatePosition(event);

    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === delta.id && widget.position.x + delta.delta.x >= 0
          ? {
              ...widget,
              position: {
                x: widget.position.x + delta.delta.x,
                y: widget.position.y + delta.delta.y,
              },
            }
          : widget,
      ),
    );
  };

  return (
    <GridLayout className="bg-gray-400 ">
      <DndContext onDragEnd={handleDragEnd}>
        {widgets.map((widget) => (
          <DraggableWidget
            key={widget.id}
            id={widget.id}
            position={widget.position}
            size={widget.size}
            onDragEnd={() => {}}
          />
        ))}
      </DndContext>
    </GridLayout>
  );
}
