import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/logo.png" width={150} height={100} alt="Logo " />
    </div>
  );
}
