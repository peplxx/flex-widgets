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
function checkBounds(postition: Position, breakpoint: string): boolean {
  let size: Position = { x: 0, y: 0 };

  if (breakpoint == "lg") {
    size = { x: 8, y: 100 };
  } else if (breakpoint == "md") {
    size = { x: 6, y: 100 };
  } else {
    size = { x: 4, y: 100 };
  }

  return (
    postition.x >= 0 &&
    postition.y >= 0 &&
    postition.x < size.x &&
    postition.y < size.y
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
      position: { x: 2, y: 0 },
      size: { width: 1, height: 1 },
    },
    {
      id: "3",
      position: { x: 0, y: 2 },
      size: { width: 3, height: 2 },
    },
    {
      id: "4",
      position: { x: 2, y: 1 },
      size: { width: 1, height: 1 },
    },
    {
      id: "5",
      position: { x: 3, y: 0 },
      size: { width: 2, height: 4 },
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

        return widget.id === delta.id && checkBounds(updatedPos, "lg")
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
            className="bg-gray-100"
            id={widget.id}
            isDraggable={true}
            position={widget.position}
            size={widget.size}
          />
        ))}
      </DndContext>
    </GridLayout>
  );
}
