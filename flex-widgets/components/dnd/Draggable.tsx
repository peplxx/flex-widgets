import { DraggableAttributes } from "@dnd-kit/core";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

export function Draggable({
  ref,
  attributes,
  listeners,
  children,
  isDraggable,
  style,
}: {
  ref: any;
  attributes: DraggableAttributes;
  listeners: SyntheticListenerMap | undefined;
  children: React.ReactNode;
  isDraggable: boolean;
  style?: React.CSSProperties;
}): JSX.Element {
  return isDraggable ? (
    <div
      ref={ref}
      {...listeners}
      {...attributes}
      role="button"
      style={{ cursor: isDraggable ? "grab" : "pointer", ...style }}
      tabIndex={0}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}
