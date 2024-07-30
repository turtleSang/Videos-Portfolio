"use client";
import Logo from "@/components/Logo";
import { ListLinkNav } from "@/helper/constance";
import Link from "next/link";
import clsx from "clsx";
import { useEffect } from "react";

export default function NavBar({ active }: { active: boolean }) {
  useEffect(() => {}, [active]);

  return (
    <nav
      className={clsx(
        "flex flex-col items-center h-[87vh] absolute w-full bg-white-opacity justify-evenly duration-300",
        active ? "block" : "hidden"
      )}
    >
      {ListLinkNav.map((link, index) => {
        return (
          <Link
            className="hover:text-gray mr-3 duration-300 font-medium text-3xl"
            href={link.path}
          >
            {link.name.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
