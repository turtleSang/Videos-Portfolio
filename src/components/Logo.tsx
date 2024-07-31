import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className,
  handlePath,
}: {
  className: string;
  handlePath(newPath: string): void;
}) {
  return (
    <Link
      className={className}
      href="/"
      onClick={() => {
        handlePath("/");
      }}
    >
      <Image src="/logo.png" width={150} height={100} alt="Logo " />
    </Link>
  );
}
