import { Head } from "./head";

export default function GridLayout({
  style,
  className,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const layoutSizes = "lg:max-w-[1000px] md:max-w-[750px] max-w-[500px]";

  return (
    <div
      className={`flex flex-row h-screen ${className} overflow-hidden bg-`}
      style={style}
    >
      <Head />
      {/* <Sidebar >
        <h1>Доступные виджеты</h1>
        </Sidebar> */}

      <main
        className={`container  h-full mx-auto ${layoutSizes} flex-grow bg-grid-pattern bg-grid-lg mt-16 relative `}
      >
        {children}
      </main>
    </div>
  );
}
