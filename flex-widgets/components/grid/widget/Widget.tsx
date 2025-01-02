import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import dynamic from "next/dynamic";

import WidgetBase from "./WidgetBase";

import { TILE_SIZE } from "@/config/grid";
import { Position, Widget, widgetSizeToTileSize } from "@/types";
import { TileSize } from "@/types";
import { Grid } from "@/components/grid/Grid";
import { Draggable } from "@/components/dnd/Draggable";

function DebugOverlay({
  widget,
  position,
}: {
  widget: Widget;
  position: Position;
}) {
  if (!widget.debugOverlay) return <></>;

  return (
    <div
      className="absolute bottom-0 bg-neutral-200 rounded-xl p-3
         text-stone-800 font-bold text-xs  mx-auto "
    >
      id: <span className="text-red-500">{widget.id}</span>
      <br />
      x: <span className="text-red-500">{position.x}</span> y:{" "}
      <span className="text-red-500">{position.y}</span>
      <br />
      w: <span className="text-red-500">{widget.size.width}</span> h:{" "}
      <span className="text-red-500">{widget.size.height}</span>
    </div>
  );
}

function DragOverlay({
  widget,
  newPos,
  parent,
}: {
  widget: Widget;
  newPos: Position;
  parent: Grid;
}) {
  return (
    <>
      {parent.ableToMove({ ...widget, position: newPos }) && (
        <WidgetBase
          className={`${widget.className} text-black bg-opacity-70 animate-pulse`}
          pos={{ lg: newPos, md: newPos, sm: newPos }}
          size={widgetSizeToTileSize(widget.size)}
          tileWidgetGap={widget.tileWidgetGap}
        />
      )}

      {/* Shadow of widget*/}
      <WidgetBase
        className=" text-black border-[0.2em] border-[#1e1e1e] border-dashed border-opacity-60"
        pos={{ lg: widget.position, md: widget.position, sm: widget.position }}
        size={widgetSizeToTileSize(widget.size)}
        tileWidgetGap={widget.tileWidgetGap}
      />
    </>
  );
}

function DraggableWidget({ widget, parent }: { widget: Widget; parent: Grid }) {
  const { id, position, size, tileWidgetGap, className } = widget;

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });
  const tileSize: TileSize = widgetSizeToTileSize(size);

  const original = {
    transform: CSS.Translate.toString(transform),
  };
  const delta = {
    x: Math.round((transform?.x ?? 0) / TILE_SIZE),
    y: Math.round((transform?.y ?? 0) / TILE_SIZE),
  };
  const newPos = {
    x: widget.position.x + delta.x,
    y: widget.position.y + delta.y,
  };

  return (
    <>
      <DragOverlay newPos={newPos} parent={parent} widget={widget} />
      <Draggable
        ref={setNodeRef}
        attributes={attributes}
        isDraggable={widget.isDraggable}
        listeners={listeners}
      >
        <WidgetBase
          className={`text-black ${className} ${isDragging ? "z-10" : ""}`}
          pos={{ lg: position, md: position, sm: position }}
          size={tileSize}
          style={original}
          tileWidgetGap={tileWidgetGap}
        >
          {widget.content}
          <DebugOverlay position={newPos} widget={widget} />
        </WidgetBase>
      </Draggable>
    </>
  );
}

const WidgetComponent = dynamic(() => Promise.resolve(DraggableWidget), {
  ssr: false, // Disables server-side rendering
});

export default WidgetComponent;
