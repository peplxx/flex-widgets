import { Head } from "./head";

export default function DefaultLayout({
  style,
  className,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const layoutSizes = "lg:max-w-[1000px] md:max-w-[750px] sm:max-w-[500px]";

  return (
    <div
      className={`relative flex flex-col h-screen ${className}`}
      style={style}
    >
      <Head />
      <main
        className={`container h-full mx-auto ${layoutSizes} lex-grow bg-grid-pattern bg-grid-lg mt-16 `}
      >
        {children}
      </main>
    </div>
  );
}
