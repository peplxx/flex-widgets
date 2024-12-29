import WidgetGroup from "@/components/WidgetGroup";
import GridLayout from "@/layouts/grid";

export default function PlaygroundPage() {
  return (
    <GridLayout className="bg-gray-400 ">
      <WidgetGroup
        groupTileContent={
          <div className="border-3 w-[98%] h-[98%] border-red-400 rounded-[1em] text-black">
            Group1
          </div>
        }
        widgets={[
          {
            className: "bg-white text-black",
            pos: { lg: { x: 2, y: 0 }, md: { x: 1, y: 0 }, sm: { x: 1, y: 0 } },
            size: { height: 2, width: 2 },
            children: <>Test</>,
            tileWidgetGap: 10,
          },
          {
            className: "bg-white text-black",
            pos: { lg: { x: 1, y: 0 }, md: { x: 0, y: 0 }, sm: { x: 1, y: 2 } },
            size: { height: 1, width: 1 },
            children: <>Test2</>,
            tileWidgetGap: 10,
          },
        ]}
      />
    </GridLayout>
  );
}
