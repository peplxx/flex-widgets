import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable({
  children,
  id,
  style,
}: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  id: string;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className="absolute"
      style={{ ...style, backgroundColor: isOver ? "green" : "transparent" }}
    >
      {children}
      <br />
    </div>
  );
}
