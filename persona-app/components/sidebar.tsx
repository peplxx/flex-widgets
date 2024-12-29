export default function Sidebar({
  right = true,
  children,
}: {
  right?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`bg-gray-300 absolute ${right ? "right-0" : " "} w-0 h-full lg:w-[30%]
         text-black items-center justify-center`}
    >
      {children}
    </div>
  );
}
