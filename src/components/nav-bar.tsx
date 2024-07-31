"use client";
import { ListLinkNav } from "@/helper/constance";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function NavBar({
  handleHiden,
  path,
  handlePath,
}: {
  handleHiden(): void;
  path: string;
  handlePath(newPath: string): void;
}) {
  return (
    <nav
      className={clsx(
        "flex flex-col items-center h-[87vh] w-full justify-evenly md:flex-row md:h-full md:items-center md:w-full md:justify-evenly"
      )}
    >
      {ListLinkNav.map((link, index) => {
        return (
          <Link
            key={index}
            className={clsx(
              "hover:text-gray mr-3 duration-300 font-medium text-2xl md:text-base",
              path === link.path && "text-gray"
            )}
            href={link.path}
            onClick={() => {
              handleHiden();
              handlePath(link.path);
            }}
          >
            {link.name.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
