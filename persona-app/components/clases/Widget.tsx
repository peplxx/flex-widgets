import DraggableWidget from "../draggable/DraggableWidget";

import { Grid } from "./Grid";

import { Widget } from "@/types";

export default function WidgetComponent({
  widget,
  parent,
}: {
  widget: Widget;
  parent: Grid;
}) {
  return (
    <DraggableWidget
      key={widget.id}
      className={`${widget.className} font-bold`}
      id={widget.id}
      isDraggable={true}
      position={widget.position}
      size={widget.size}
      tileWidgetGap={widget.tileWidgetGap}
    />
  );
}
