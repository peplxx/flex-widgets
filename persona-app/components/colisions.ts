import { Widget } from "@/types";
function isColliding(widgetA: Widget, widgetB: Widget): boolean {
  return !(
    (
      widgetA.position.x + widgetA.size.width <= widgetB.position.x || // A is left of B
      widgetA.position.x >= widgetB.position.x + widgetB.size.width || // A is right of B
      widgetA.position.y + widgetA.size.height <= widgetB.position.y || // A is above B
      widgetA.position.y >= widgetB.position.y + widgetB.size.height
    ) // A is below B
  );
}
