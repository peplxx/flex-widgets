import dynamic from "next/dynamic";

import DraggableWidget from "../draggable/DraggableWidget";

import { Grid } from "./Grid";

import { Widget } from "@/types";

function ActualWidgetComponent({
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
const WidgetComponent = dynamic(() => Promise.resolve(ActualWidgetComponent), {
  ssr: false, // Disables server-side rendering
});

export default WidgetComponent;
