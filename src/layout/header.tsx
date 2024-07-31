"use client";
import ActveBarButton from "@/components/active-nav-bar-btn";
import Logo from "@/components/Logo";
import NavBar from "@/components/nav-bar";
import clsx from "clsx";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

export default function Header() {
  let [active, setActive] = useState<boolean>(false);
  let [hidden, setHiden] = useState(true);
  let [path, setPath] = useState<string>("");

  const handleHiden = () => {
    setHiden(true);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  const handleShow = () => {
    setHiden(false);
    setActive(true);
  };

  const handleSetPath = (newPath: string) => {
    setPath(newPath);
  };

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <header className="flex flex-row justify-around items-center relative  md:justify-evenly">
      <Logo className="" handlePath={handleSetPath} />
      <div
        className={clsx(
          "absolute bottom-0 left-0 translate-y-full w-full bg-white-opacity duration-300 z-50",
          !active && "hidden",
          hidden ? "opacity-0" : "opacity-100",
          "md:block md:opacity-100 md:relative md:h-[100px] md:w-2/3 md:translate-y-0 md:bg-transparent"
        )}
      >
        <NavBar
          path={path}
          handlePath={handleSetPath}
          handleHiden={handleHiden}
        />
      </div>
      <ActveBarButton
        activeNav={active}
        handleHiden={handleHiden}
        handleShow={handleShow}
      />
    </header>
  );
}
