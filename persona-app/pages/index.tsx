import WidgetBase from "@/components/WidgetBase";
import WidgetGroup from "@/components/WidgetGroup";
import GridLayout from "@/layouts/grid";

export default function PlaygroundPage() {
  return (
    <GridLayout className="bg-gray-400 ">
      <WidgetGroup
       widgets={[
        {
        className:"bg-white text-black",
        pos:{ lg: { x: 2, y: 0 }, md: { x: 1, y: 0 }, sm: { x: 1, y: 0 } },
        size:{ height: 2, width: 2 },
        children: <>privet</>,
        }]}/>
        {/* <WidgetBase
        className="bg-white text-black"
        pos={{ lg: { x: 1, y: 0 }, md: { x: 0, y: 0 }, sm: { x: 0, y: 0 } }}
        size={{ height: 1, width: 1 }}
      >
        privet
      </WidgetBase> */}
    </GridLayout>
  );
}
