import Logo from "@/components/Logo";
import NavBar from "@/components/nav-bar";
import { headers } from "next/headers";

export default function Header() {
  return (
    <header className="relative">
      <Logo />
      <NavBar active={false} />
    </header>
  );
}
