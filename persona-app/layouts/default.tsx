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
  return (
    <div
      className={`relative flex flex-col h-screen ${className}`}
      style={style}
    >
      <Head />
      <main className={`container h-auto mt-16 mx-auto justify-center flex `}>
        {children}
      </main>
    </div>
  );
}
