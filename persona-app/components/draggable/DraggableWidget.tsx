import { DraggableAttributes, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import WidgetBase from "../WidgetBase";

import { TILE_SIZE } from "@/config/grid";
import { widgetSizeToTileSize } from "@/types";
import { TileSize } from "@/types";

export function Draggable({
  ref,
  attributes,
  listeners,
  children,
  isDraggable,
}: {
  ref: any;
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
  children: React.ReactNode;
  isDraggable: boolean;
}): JSX.Element {
  return isDraggable ? (
    <div ref={ref} {...listeners} {...attributes}>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}
function DraggableWidget({
  id,
  position,
  onDragEnd,
  size,
  tileWidgetGap = 5,
  className,
  isDraggable = true,
}: {
  id: string;
  position: { x: number; y: number };
  onDragEnd?: (id: string, position: { x: number; y: number }) => void;
  size: { width: number; height: number };
  tileWidgetGap?: number;
  className?: string;
  isDraggable?: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const tileSize: TileSize = widgetSizeToTileSize(size);

  const delta = {
    x: Math.round((transform?.x ?? 0) / TILE_SIZE),
    y: Math.round((transform?.y ?? 0) / TILE_SIZE),
  };
  const newPos = {
    x: position.x + delta.x,
    y: position.y + delta.y,
  };
  const original = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <>
      {/* */}
      <WidgetBase
        className={`${className} text-black bg-opacity-70  animate-pulse`}
        pos={{ lg: newPos, md: newPos, sm: newPos }}
        size={tileSize}
        tileWidgetGap={tileWidgetGap}
      />

      <WidgetBase
        className=" text-black border-[5px] border-dashed border-opacity-60"
        pos={{ lg: position, md: position, sm: position }}
        size={tileSize}
        tileWidgetGap={tileWidgetGap}
      />

      <Draggable
        ref={setNodeRef}
        attributes={attributes}
        isDraggable={isDraggable}
        listeners={listeners}
      >
        <WidgetBase
          className={`${className} text-black`}
          pos={{ lg: position, md: position, sm: position }}
          size={tileSize}
          style={original}
          tileWidgetGap={tileWidgetGap}
        >
          {JSON.stringify(newPos)}
        </WidgetBase>
      </Draggable>
    </>
  );
}
export default DraggableWidget;
