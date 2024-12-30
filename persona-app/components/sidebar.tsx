import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";

import DraggableWidget from "./draggable/DraggableWidget";

import { Widget } from "@/types";
import { Position } from "@/types";
import { TILE_SIZE } from "@/config/grid";

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
export default function Sidebar({
  right = true,
  children,
}: {
  right?: boolean;
  children?: React.ReactNode;
}) {
  const layoutSizes = "lg:max-w-[500px]";
  const [widgets, setWidgets] = React.useState<Widget[]>([
    {
      id: "1",
      position: { x: 1, y: 1 },
      size: { width: 2, height: 2 },
      className: "ring-2 ring-neutral-600",
    },
  ]);
  const colors: string[] = ["bg-white"];
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
    <div
      className={`bg-gray-100 z-10 absolute ${right ? "right-0" : " "} w-0 h-full lg:w-[25%]
         text-black shadow-xl flex flex-col items-center justify-start border-neutral-500 border-l-[0.5em]`}
    >
      <h1>Доступные виджеты</h1>
      <main
        className={`container scale-80 max-h-[500px] ${layoutSizes} flex-grow bg-grid-dots bg-grid-lg mt-16 relative `}
      >
        <DndContext onDragEnd={handleDragEnd}>
          {widgets.map((widget, index) => (
            <DraggableWidget
              key={widget.id}
              className={`${colors[index % colors.length]} ${widget.className}
                font-bold `}
              id={widget.id}
              isDraggable={true}
              position={widget.position}
              size={widget.size}
              tileWidgetGap={widget.tileWidgetGap}
            />
          ))}
        </DndContext>
      </main>
      {children}
    </div>
  );
}
