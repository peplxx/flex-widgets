import { useEffect, useState } from "react";

import WidgetComponent from "./WidgetComponent";

import { TILE_SIZE } from "@/config/grid";
import { Position, Size, Widget } from "@/types";

export class Grid {
  private widgets: Map<string, Widget> = new Map();
  private displayGridLines: boolean = true;
  private listeners: (() => void)[] = [];

  public id: string;
  public size: Size;

  isGridLinesVisible(): boolean {
    return this.displayGridLines;
  }
  addWidget(widget: Widget) {
    this.widgets.set(widget.id, widget);
    this.notifyListeners();
  }
  deleteWidget(widgetID: string) {
    this.widgets.delete(widgetID);
    this.notifyListeners();
  }

  constructor(id: string, size: Size, widgets: Widget[]) {
    this.id = id;
    this.size = size;
    widgets.forEach((widget) => {
      this.addWidget(widget);
    });
  }
  isColliding(widgetA: Widget, widgetB: Widget): boolean {
    return !(
      (
        widgetA.position.x + widgetA.size.width <= widgetB.position.x || // A is left of B
        widgetA.position.x >= widgetB.position.x + widgetB.size.width || // A is right of B
        widgetA.position.y + widgetA.size.height <= widgetB.position.y || // A is above B
        widgetA.position.y >= widgetB.position.y + widgetB.size.height
      ) // A is below B
    );
  }
  getWidgets() {
    return this.widgets;
  }

  moveWidget(widgetID: string, position: Position) {
    let widget = this.widgets.get(widgetID);

    if (widget) {
      widget.position.x += position.x;
      widget.position.y += position.y;
      this.notifyListeners();
    }
  }

  public addListener(listener: () => void): void {
    this.listeners.push(listener);
  }
  public removeListener(listener: () => void): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }
  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener());
  }
}

export function GridComponent({
  grid,
  className,
  style,
}: {
  grid: Grid;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [widgets, setWidgets] = useState<Map<string, Widget>>(
    grid.getWidgets(),
  );
  const [showGridLines, setShowGridLines] = useState(grid.isGridLinesVisible());

  useEffect(() => {
    const updateWidgets = () => {
      setWidgets(new Map(grid.getWidgets()));
      setShowGridLines(grid.isGridLinesVisible());
    };

    grid.addListener(updateWidgets);

    return () => {
      grid.removeListener(updateWidgets);
    };
  }, [grid]);

  const sizing: React.CSSProperties = {
    minHeight: `${grid.size.height * TILE_SIZE}px`,
    minWidth: `${grid.size.width * TILE_SIZE}px`,
    maxHeight: `${grid.size.height * TILE_SIZE}px`,
    maxWidth: `${grid.size.width * TILE_SIZE}px`,
  };
  const gridLines: string = showGridLines ? "bg-grid-dots bg-grid-lg" : "";

  return (
    <div
      className={`container relative ${gridLines} ${className}`}
      style={{ ...sizing, ...style }}
    >
      <>
        {Array.from(widgets.values()).map((widget, index) => (
          <WidgetComponent key={index} parent={grid} widget={widget} />
        ))}
      </>
    </div>
  );
}
