import { useDraggable } from "@dnd-kit/core";

import { TILE_SIZE } from "@/config/grid";
import { widgetSizeToTileSize } from "@/types";
import { TileSize } from "@/types";

function DraggableWidget({
  id,
  position,
  onDragEnd,
  size,
  tileWidgetGap = 5,
}: {
  id: string;
  position: { x: number; y: number };
  onDragEnd: (id: string, position: { x: number; y: number }) => void;
  size: { width: number; height: number };
  tileWidgetGap?: number;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const tileSize: TileSize = widgetSizeToTileSize(size);

  const itemCentered: string = "flex justify-center items-center";

  const draggedX = Math.round((transform?.x ?? 0) / TILE_SIZE);
  const draggedY = Math.round((transform?.y ?? 0) / TILE_SIZE);
  const delta = {
    x: draggedX,
    y: draggedY,
  };
  const isDragged = delta.x != 0 || delta.y != 0;
  const newPos = {
    x: position.x + draggedX,
    y: position.y + draggedY,
  };

  const copyStyle = {
    position: "absolute",
    left: `${newPos.x * TILE_SIZE}px`,
    top: `${newPos.y * TILE_SIZE}px`,
    height: `${tileSize.height * TILE_SIZE}px`,
    width: `${tileSize.width * TILE_SIZE}px`,
    border: "1px dashed black",
    transition: "left 0.2s ease, top 0.2s ease", // Add transition here as well
    opacity: 0.3,
  };
  const original = {
    position: "absolute",
    left: `${position.x * TILE_SIZE}px`,
    top: `${position.y * TILE_SIZE}px`,
    height: `${tileSize.height * TILE_SIZE}px`,
    width: `${tileSize.width * TILE_SIZE}px`,
    cursor: "grab",
    transition: "left 0.2s ease, top 0.2s ease", // Add transition here as well
  };

  //   console.log(newPos);
  //   console.log(transform);

  return (
    <>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className={`rounded-[1em] bg-violet-100  text-black ${itemCentered}`}
        role="button"
        style={original}
        tabIndex={0}
        onMouseUp={(event) => {
          console.log("Mouse up", newPos, event);
          onDragEnd(id, newPos);
        }}
      >
        {JSON.stringify(position)}
      </div>
      {isDragged && (
        <div
          className={`rounded-[1em] bg-violet-100 flex justify-center items-center`}
          role="button"
          style={copyStyle}
          tabIndex={0}
        >
          Moving here
        </div>
      )}
    </>
  );
}
export default DraggableWidget;
