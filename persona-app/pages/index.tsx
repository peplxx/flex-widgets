import { Widget } from "@/types";
import React from "react";
let widgets: Widget[] = [
  new Widget(
    { x: 0, y: 0 },
    { width: 2, height: 2 },
    { className: "ring-2 ring-neutral-600 bg-white" },
  ),
  new Widget(
    { x: 2, y: 0 },
    { width: 1, height: 1 },
    { className: "bg-red-500", tileWidgetGap: 20 },
  ),
  new Widget(
    { x: 0, y: 2 },
    { width: 3, height: 2 },
    { className: "ring-2 ring-neutral-600 bg-white" },
  ),
  new Widget(
    { x: 2, y: 1 },
    { width: 1, height: 1 },
    { className: "bg-red-500", tileWidgetGap: 20 },
  ),
  new Widget(
    { x: 3, y: 0 },
    { width: 2, height: 4 },
    { className: "ring-2 ring-neutral-600 bg-white" },
  ),
];
export default function PlaygroundPage() {
  return <></>;
}
