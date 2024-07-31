"use client";
import { ItemsInterface } from "@/helper/constance";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Style from "@/app/custom.module.css";

export default function ListItem({ listItem }: { listItem: ItemsInterface[] }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {listItem.map((val) => {
        return (
          <Link
            href={`/${val.id}`}
            key={val.id}
            className={clsx("block w-4/5 mx-auto text-center mb-6", Style.item)}
            data-aos="fade-up"
          >
            <img className="item_pic block w-full" src={val.linkImg} alt="" />
            <h1 className="text-2xl text-gray">{val.title}</h1>
            <h2>{val.role}</h2>
          </Link>
        );
      })}
    </div>
  );
}
