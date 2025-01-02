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
      <main
        className={`container mt-20 mx-auto flex justify-center items-center`}
      >
        {children}
      </main>
    </div>
  );
}
