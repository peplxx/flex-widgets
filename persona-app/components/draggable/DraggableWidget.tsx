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

  const newPos = {
    x: position.x + draggedX,
    y: position.y + draggedY,
  };

  const style = {
    position: "absolute",
    left: `${newPos.x * TILE_SIZE}px`,
    top: `${newPos.y * TILE_SIZE}px`,
    height: `${tileSize.height * TILE_SIZE}px`,
    width: `${tileSize.width * TILE_SIZE}px`,
    border: "1px dashed black",
    cursor: "grab",
  };

  console.log(newPos);
  //   console.log(transform);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`rounded-[1em] ${itemCentered}`}
      role="button"
      style={style}
      tabIndex={0}
      onMouseUp={(event) => {
        console.log("Mouse up", newPos, event);
        onDragEnd(id, newPos);
      }}
    >
      widget1
    </div>
  );
}
export default DraggableWidget;
