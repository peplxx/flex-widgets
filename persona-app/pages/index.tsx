import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";

import DraggableWidget from "@/components/draggable/DraggableWidget";
import GridLayout from "@/layouts/grid";
import { TILE_SIZE } from "@/config/grid";
import { Position } from "@/types";

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
function checkBounds(postition: Position): boolean {
  const sizeX = 6;
  const sizeY = 5;

  return (
    postition.x >= 0 &&
    postition.y >= 0 &&
    postition.x < sizeX &&
    postition.y < sizeY
  );
}

export default function PlaygroundPage() {
  const [widgets, setWidgets] = React.useState<Widget[]>([
    {
      id: "1",
      position: { x: 0, y: 0 },
      size: { width: 2, height: 2 },
    },
    {
      id: "2",
      position: { x: 3, y: 3 },
      size: { width: 1, height: 1 },
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const delta = updatePosition(event);

    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) => {
        const updatedPos = {
          x: widget.position.x + delta.delta.x,
          y: widget.position.y + delta.delta.y,
        };

        return widget.id === delta.id && checkBounds(updatedPos)
          ? {
              ...widget,
              position: updatedPos,
            }
          : widget;
      }),
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
